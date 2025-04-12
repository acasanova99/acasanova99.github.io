// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://acasanova99.github.io',
    base: '/',
	integrations: [
		starlight({
      title: 'Hackbook',
			social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/acasanova99' }
            ],
            logo: {
                src: './src/assets/black_druider.svg',
                replacesTitle: false,
            },
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {directory: 'guides'}
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
