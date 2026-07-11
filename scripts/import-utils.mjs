import { basename, extname } from 'node:path';
import { parseHTML } from 'linkedom';

export function plainTextFromHtml(html) {
	const { document } = parseHTML(`<body>${html ?? ''}</body>`);
	return document.body.textContent.trim();
}

export function safeYaml(value) {
	return JSON.stringify(value.replace(/\s+/g, ' ').trim());
}

export function uniqueName(url, usedNames) {
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
