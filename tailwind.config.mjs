/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '320px',
			xss: '340px',
			sm: '360px',
			xsm: '390px',
			smm: '400px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xxl: '1440px'
		},
		extend: {
			colors: {
				deepBlue: '#243973',
				darkBlue: '#12263A',
				green: '#43B549',
				lightGreen: '#E1F5EC',
				lightGrey: '#E5E5E5',
				tinyGrey: '#54595F'
			},
			height: {
				'100vh': '100vh'
			},
			minHeight: {
				'120vh': '25rem'
			},
			fontSize: {
				'h1': '34pt',
				'h2': '22pt',
				'h3': '18pt',
				'bodyText': '14pt',
				'description': '14pt'
			},
			fontWeight: {
				'h1': 'extraBold',
				'h2': 'bold',
				'h3': 'semiBold',
				'bodyText': 'medium',
				'description': 'regular'
			},
			boxShadow: {
				'xl': '0px 0px 60px 0px rgba(0, 0, 0, 0.1)'
			},
		},
	},
	plugins: [],
}
