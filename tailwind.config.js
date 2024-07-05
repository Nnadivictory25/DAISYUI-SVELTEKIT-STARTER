import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#006aff',

					secondary: '#f5f5f4',

					accent: '#009ca7',

					neutral: '#000f0d',

					'base-100': '#000000',

					info: '#00f0ff',

					success: '#38b000',
					'success-content': '#fff',

					warning: '#b45309',

					error: '#e11d48',
				},
			},
		],
	},

	plugins: [daisyui],
};
