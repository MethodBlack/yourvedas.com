import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Handbook',
			social: {
				github: 'https://github.com/New-Templates/handbook',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introduction', slug: 'guides/example' },
					],
				},
				{
					label: 'Keyboard Accessibility',
					autogenerate: { directory: 'keyboard-accessibility' },
				},
			],
			customCss: [
				'./src/styles/global.scss',
			],
		}),
	],
});
