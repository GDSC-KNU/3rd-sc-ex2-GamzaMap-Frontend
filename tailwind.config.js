/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'beg-1': '#FFEDDC',
				'gry-1': '#626161',
			},
		},
	},
	plugins: [],
};
