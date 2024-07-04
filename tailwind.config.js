/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				createBgImage: 'url("/src/assets/authBgImage.png")',
				welcomeBgImage: 'url("/src/assets/welcomeBgImage.png")',
				forgottenBgImage: 'url("/src/assets/forgottenBgImage.png")',
				resetBgImage: 'url("/src/assets/resetBgImage.png")',
			},
		},
	},
	plugins: [],
};
