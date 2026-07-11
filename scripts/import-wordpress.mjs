import { mkdir, writeFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import TurndownService from 'turndown';

const site = 'deependrasolanky.wordpress.com';
const apiBase = `https://public-api.wordpress.com/wp/v2/sites/${site}/posts?per_page=100&_fields=id,date,slug,link,title,content`;
const root = new URL('../', import.meta.url);
const contentDir = new URL('./src/content/blog/', root);
const assetDir = new URL('./src/assets/blog/', root);
const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });

turndown.addRule('removeEmptyLinks', {
	filter: (node) => node.nodeName === 'A' && !node.textContent.trim() && !node.querySelector('img'),
	replacement: () => '',
});

const excludedSlugs = new Set([
	'alwar-sariska-trip-first-day',
	'alwar-sariska-trip-second-day',
]);

const allPosts = [];
for (let page = 1; ; page++) {
	const response = await fetch(`${apiBase}&page=${page}`);
	if (response.status === 400) break;
	if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
	const batch = await response.json();
	if (!batch.length) break;
	allPosts.push(...batch);
}

const posts = allPosts.filter((post) => !excludedSlugs.has(post.slug));

const linkMap = new Map(posts.map((post) => [post.link.replace(/^http:/, 'https:'), `/blog/${post.slug}/`]));
await mkdir(contentDir, { recursive: true });
await mkdir(assetDir, { recursive: true });

function markdownText(html) {
	return turndown.turndown(html ?? '').replace(/\n{3,}/g, '\n\n').trim();
}

function safeYaml(value) {
	return JSON.stringify(value.replace(/\s+/g, ' ').trim());
}

function uniqueName(url, usedNames) {
	const parsed = new URL(url);
	let name = decodeURIComponent(basename(parsed.pathname)) || 'image';
	name = name.replace(/[^a-zA-Z0-9._-]+/g, '-');
	if (!extname(name)) name += '.jpg';
	const extension = extname(name);
	const stem = name.slice(0, name.length - extension.length);
	let candidate = name;
	let counter = 2;
	while (usedNames.has(candidate.toLowerCase())) candidate = `${stem}-${counter++}${extension}`;
	usedNames.add(candidate.toLowerCase());
	return candidate;
}

for (const post of posts) {
	let html = post.content.rendered ?? '';
	html = html.replace(/<img\b[^>]*\bsrc=["']https?:\/\/(?:blogger\.googleusercontent\.com\/tracker\/|i0\.wp\.com\/img\.zemanta\.com\/pixy\.gif)[^"']*["'][^>]*>/gi, '');
	for (const [oldUrl, newPath] of linkMap) {
		html = html.replaceAll(oldUrl, newPath).replaceAll(oldUrl.replace('https:', 'http:'), newPath);
	}

	const postAssetDir = new URL(`./${post.slug}/`, assetDir);
	const usedNames = new Set();
	const images = [...html.matchAll(/<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi)]
		.map((match) => match[1])
		.filter((url) => /^https?:\/\//i.test(url));

	if (images.length) await mkdir(postAssetDir, { recursive: true });
	for (const imageUrl of [...new Set(images)]) {
		try {
			const response = await fetch(imageUrl);
			if (!response.ok) continue;
			const fileName = uniqueName(imageUrl, usedNames);
			await writeFile(new URL(fileName, postAssetDir), Buffer.from(await response.arrayBuffer()));
			html = html.replaceAll(imageUrl, `../../assets/blog/${post.slug}/${fileName}`);
		} catch {
			// Keep the original public image URL when a download is unavailable.
		}
	}

	const title = markdownText(post.title.rendered);

	const body = markdownText(html);
	const frontmatter = [
		'---',
		`title: ${safeYaml(title)}`,

		`publishDate: ${post.date.slice(0, 10)}`,
		'tags: []',
		'draft: false',
		`originalUrl: ${safeYaml(post.link)}`,
		'---',
		'',
	].join('\n');
	await writeFile(new URL(`./${post.slug}.md`, contentDir), `${frontmatter}${body}\n`, 'utf8');
}

console.log(`Imported ${posts.length} WordPress posts.`);