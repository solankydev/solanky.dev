import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const products = {
	tasks: 'Tasks',
	reader: 'Reader',
	flow: 'Flow',
} as const;

export const onRequest = defineRouteMiddleware((context) => {
	const match = context.url.pathname.match(/^\/openza\/(tasks|reader|flow)(?:\/|$)/);
	if (!match) return;

	const product = match[1] as keyof typeof products;
	const productLabel = products[product];
	const route = context.locals.starlightRoute;

	const productGroup = route.sidebar.find(
		(entry) => entry.type === 'group' && entry.label === productLabel,
	);

	if (!productGroup || productGroup.type !== 'group') return;

	const productLinks = productGroup.entries.filter((entry) => entry.type === 'link');
	const currentIndex = productLinks.findIndex((entry) => entry.isCurrent);

	route.siteTitle = 'Openza ' + productLabel;
	route.siteTitleHref = '/openza/' + product + '/';
	route.sidebar = [...productGroup.entries];

	route.pagination = {
		prev: currentIndex > 0 ? productLinks[currentIndex - 1] : undefined,
		next:
			currentIndex >= 0 && currentIndex < productLinks.length - 1
				? productLinks[currentIndex + 1]
				: undefined,
	};
});