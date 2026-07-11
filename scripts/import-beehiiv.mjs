import { mkdir, writeFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';

const posts = [
	{
		slug: 'free-analytics-tools-to-see-user-interactions-and-improve-your-product',
		publishDate: '2024-07-26',
		description: 'Learn about three free tools that simplify product analytics and help you understand how people discover and use your product.',
		tags: ['products', 'analytics'],
	},
	{
		slug: 'automating-carl-pullein-s-time-sector-system-using-todoist-filters',
		publishDate: '2024-10-23',
		description: 'An experiment using Todoist filters and due dates to automate parts of the Time Sector System and make reviews faster.',
		tags: ['productivity', 'todoist'],
	},
	{
		slug: 'logseq-migration-journey-challenges-delays-and-hopes',
		publishDate: '2025-04-27',
		description: "A look at Logseq's ambitious move to a database architecture, the long transition, and the challenges surrounding it.",
		tags: ['productivity', 'pkm', 'open-source'],
	},
];

const root = new URL('../', import.meta.url);
const contentDir = new URL('./src/content/blog/', root);
const assetDir = new URL('./src/assets/blog/', root);
const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });

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
	const sourceUrl = `https://www.solanky.dev/p/${post.slug}`;
	const response = await fetch(sourceUrl);
	if (!response.ok) throw new Error(`${sourceUrl} returned ${response.status}`);
	const { document } = parseHTML(await response.text());
	const body = document.querySelector('#content-blocks');
	const title = document.querySelector('h1')?.textContent?.trim();
	if (!body || !title) throw new Error(`Could not find article content for ${post.slug}`);

	for (const anchor of body.querySelectorAll('a[href]')) {
		try {
			const url = new URL(anchor.getAttribute('href'), sourceUrl);
			for (const key of [...url.searchParams.keys()]) if (key.startsWith('utm_')) url.searchParams.delete(key);
			anchor.setAttribute('href', url.toString());
		} catch {}
	}

	const postAssetDir = new URL(`./${post.slug}/`, assetDir);
	const usedNames = new Set();
	const images = [...body.querySelectorAll('img[src]')];
	if (images.length) await mkdir(postAssetDir, { recursive: true });
	for (const image of images) {
		const imageUrl = new URL(image.getAttribute('src'), sourceUrl).toString();
		try {
			const imageResponse = await fetch(imageUrl);
			if (!imageResponse.ok) continue;
			const fileName = uniqueName(imageUrl, usedNames);
			await writeFile(new URL(fileName, postAssetDir), Buffer.from(await imageResponse.arrayBuffer()));
			image.setAttribute('src', `../../assets/blog/${post.slug}/${fileName}`);
		} catch {}
	}

	const markdown = turndown.turndown(body.innerHTML).replace(/\n{3,}/g, '\n\n').trim();
	const frontmatter = [
		'---',
		`title: ${safeYaml(title)}`,
		`description: ${safeYaml(post.description)}`,
		`publishDate: ${post.publishDate}`,
		`tags: ${JSON.stringify(post.tags)}`,
		'draft: false',
		`originalUrl: ${safeYaml(sourceUrl)}`,
		'---',
		'',
	].join('\n');
	await writeFile(new URL(`./${post.slug}.md`, contentDir), `${frontmatter}${markdown}\n`, 'utf8');
}

console.log(`Imported ${posts.length} beehiiv posts.`);