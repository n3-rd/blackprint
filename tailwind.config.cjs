/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['light', 'dark']
	},

	plugins: [require('daisyui')]
};

module.exports = config;
