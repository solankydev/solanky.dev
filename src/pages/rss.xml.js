import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => !data.draft))
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
	return rss({
		title: 'Deependra Solanky',
		description: 'Writing on products, productivity, technology, and the systems we use to get work done.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			...(post.data.description ? { description: post.data.description } : {}),
			pubDate: post.data.publishDate,
			link: `/blog/${post.id}/`,
		})),
	});
}