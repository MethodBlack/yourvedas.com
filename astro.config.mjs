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
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: [
				'./src/styles/global.scss',
			],
		}),
	],
});
