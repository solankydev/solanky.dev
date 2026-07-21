// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://solanky.dev',
	integrations: [
		sitemap(),
		starlight({
			title: 'Openza',
			description: 'Guides for installing and using Openza apps on Windows',
			logo: { src: './src/assets/openza/openza.svg' },
			favicon: '/openza-favicon.svg',
			customCss: ['./src/styles/starlight.css'],
			routeMiddleware: './src/route-data.ts',
			components: { SocialIcons: './src/components/StarlightHeaderLinks.astro' },
			sidebar: [
				{ label: 'Openza home', link: '/openza/' },
				{
					label: 'Tasks',
					items: [
						{ label: 'Overview', slug: 'openza/tasks' },
						{ label: 'Introduction', slug: 'openza/tasks/getting-started/introduction' },
						{ label: 'Installation', slug: 'openza/tasks/getting-started/installation' },
						{ label: 'Connections', slug: 'openza/tasks/getting-started/configuration' },
						{ label: 'App Layout', slug: 'openza/tasks/features/dashboard' },
						{ label: 'Tasks', slug: 'openza/tasks/features/tasks' },
						{ label: 'Projects', slug: 'openza/tasks/features/projects' },
						{ label: 'Labels', slug: 'openza/tasks/features/labels' },
						{ label: 'Backup and Restore', slug: 'openza/tasks/features/backup' },
						{ label: 'Import from Markdown', slug: 'openza/tasks/features/import' },
						{ label: 'Export to Markdown', slug: 'openza/tasks/features/export' },
						{ label: 'Todoist', slug: 'openza/tasks/guides/todoist-setup' },
						{ label: 'Microsoft To Do', slug: 'openza/tasks/guides/mstodo-setup' },
					],
				},
				{
					label: 'Reader',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'openza/reader' },
						{ label: 'Introduction', slug: 'openza/reader/getting-started/introduction' },
						{ label: 'Installation', slug: 'openza/reader/getting-started/installation' },
						{ label: 'Reading Markdown', slug: 'openza/reader/getting-started/reading-markdown' },
						{ label: 'Markdown Support', slug: 'openza/reader/features/markdown-rendering' },
						{ label: 'Navigation and Search', slug: 'openza/reader/features/navigation-search' },
						{ label: 'Safety and Remote Content', slug: 'openza/reader/features/security-model' },
					],
				},
				{
					label: 'Flow',
					collapsed: true,
					items: [
						{ label: 'Overview', slug: 'openza/flow' },
						{ label: 'Introduction', slug: 'openza/flow/getting-started/introduction' },
						{ label: 'Installation', slug: 'openza/flow/getting-started/installation' },
						{ label: 'GitHub Sign-in', slug: 'openza/flow/getting-started/github-token' },
						{ label: 'GitHub Activity Views', slug: 'openza/flow/features/pr-inbox' },
						{ label: 'Reviewing Pull Requests', slug: 'openza/flow/guides/reviewing-prs' },
						{ label: 'Notifications', slug: 'openza/flow/guides/notifications' },
					],
				},
			],
		}),
	],
});
