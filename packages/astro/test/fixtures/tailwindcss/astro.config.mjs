import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { fileURLToPath } from 'url';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: {
				path: fileURLToPath(new URL('./tailwind.config.js', import.meta.url)),
			},
		}),
		mdx(),
	],
	vite: {
		build: {
			assetsInlineLimit: 0,
		},
	},
});
