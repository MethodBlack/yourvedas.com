import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Your Vedas',
			social: {
				github: 'https://github.com/YourVedas/your-vedas',
			},
			sidebar: [
				{
					label: 'Modern Books',
					autogenerate: { directory: 'modern' },
				},
				{
					label: 'Vedas',
					autogenerate: { directory: 'vedas' },
				},
				{
					label: 'Puranas',
					autogenerate: { directory: 'puranas' },
				},
				{
					label: 'Upanishads',
					autogenerate: { directory: 'upanishads' },
				},
				{
					label: 'Vedanta',
					autogenerate: { directory: 'vedanta' },
				},
				{
					label: 'Bhagavad Gita',
					autogenerate: { directory: 'bhagavad-gita' },
				},
			],
			customCss: [
				'./src/styles/global.scss',
			],
		}),
	],
});
