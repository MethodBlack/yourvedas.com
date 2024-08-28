import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://yourvedas.com',
	integrations: [sitemap()],
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			title: 'Your Vedas',
			sidebar: [
				{
					label: 'Modern Books',
					items: [
						{ label: 'Fruit Gathering [1916]', link: '/modern/fruit-gathering' },
						{ label: 'Gitanjali—Song Offerings [1913]', link: '/modern/gitanjali' },
						{ label: 'Love and Death [1921]', link: '/modern/love-and-death' },
						{
							label: 'Sadhana [1915]',
							collapsed: true,
							items: [
							  { label: 'Index', link: '/modern/sadhana' },
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
						{ label: 'Stray Birds [1916]', link: '/modern/stray-birds' },
						{ label: 'Thought Relics [1921]', link: '/modern/thought-relics' },
						{
							label: 'Yoga Sutras [1912]',
							collapsed: true,
							items: [
							  { label: 'Index', link: '/modern/yoga-sutras' },
							  { label: 'Book I', link: '/modern/yoga-sutras/book1' },
							  { label: 'Book II', link: '/modern/yoga-sutras/book2' },
							  { label: 'Book III', link: '/modern/yoga-sutras/book3' },
							  { label: 'Book IV', link: '/modern/yoga-sutras/book4' },
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
