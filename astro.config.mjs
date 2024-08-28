import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Your Vedas',
			sidebar: [
				{
					label: 'Modern Books',
					collapsed: true,
					items: [
						{ label: 'Fruit Gathering [1916]', link: '/modern/fruit-gathering' },
						{ label: 'Gitanjali—Song Offerings [1913]', link: '/modern/gitanjali' },
						{
						  label: 'Sadhana—The Realisation of Life [1915]',
						  collapsed: true,
						  items: [
							{ label: 'Overview', link: '/modern/sadhana' },
							{ label: 'The Relation of the Individual to the Universe', link: '/modern/sadhana/01' },
							{ label: 'Soul Consciousness', link: '/modern/sadhana/02' },
							{ label: 'The Problem of Evil', link: '/modern/sadhana/03' },
							{ label: 'The Problem of Self', link: '/modern/sadhana/04' },
							{ label: 'Realisation in Love', link: '/modern/sadhana/05' },
							{ label: 'Realisation in Action', link: '/modern/sadhana/06' },
							{ label: 'The Realisation of Beauty', link: '/modern/sadhana/07' },
							{ label: 'The Realisation of the Infinite', link: '/modern/sadhana/08' },
						  ] 
						},
					  ],
				},
				{
					label: 'Vedas',
					collapsed: true,
					autogenerate: { directory: 'vedas' },
				},
				{
					label: 'Puranas',
					collapsed: true,
					autogenerate: { directory: 'puranas' },
				},
				{
					label: 'Upanishads',
					collapsed: true,
					autogenerate: { directory: 'upanishads' },
				},
				{
					label: 'Vedanta',
					collapsed: true,
					autogenerate: { directory: 'vedanta' },
				},
				{
					label: 'Bhagavad Gita',
					collapsed: true,
					autogenerate: { directory: 'bhagavad-gita' },
				},
			],
			customCss: [
				'./src/styles/global.scss',
			],
		}),
	],
});
