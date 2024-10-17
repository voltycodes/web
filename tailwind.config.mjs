import defaultTheme from 'tailwindcss/defaultTheme'

const colors = ['green-400', 'red-400', 'yellow-400', 'gray-400'];

const generateSafelist = (colors) => {
  return colors.flatMap(color => [
    `bg-${color}`,
    `border-${color}`
  ]);
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: generateSafelist(colors),
	theme: {
		extend: {
			colors: {
				background: '#000',
				foreground: '#fff',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}