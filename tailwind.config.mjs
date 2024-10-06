import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inconsolata', 'monospace', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				background: '#000',
				foreground: '#fff',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}