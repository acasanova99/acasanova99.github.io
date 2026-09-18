// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://acasanova99.github.io',
    integrations: [
        starlight({
            title: 'Hackbook',
            defaultLocale: 'en',
            locales: {
                en: {label: 'English', lang: 'en'},
                es: {label: 'Español', lang: 'es'},
            },
            favicon: '/favicon/favicon.svg',
            head: [
                {tag: 'link', attrs: {rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png'}},
                {tag: 'link', attrs: {rel: 'manifest', href: '/favicon/site.webmanifest'}},
            ],
            social: [
                {icon: 'github', label: 'GitHub', href: 'https://github.com/acasanova99'}
            ],
            logo: {
                src: './src/assets/black_druider.svg',
                replacesTitle: false,
            },
            sidebar: [
                {
                    label: 'Pentesting',
                    items: [{autogenerate: {directory: 'pentesting'}}],
                },
            ],
            customCss: [
                './src/styles/fonts.css',
                './src/styles/custom.css',
            ],
        }),
    ],
});
