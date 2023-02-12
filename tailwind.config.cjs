/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					light: '#7c3aed',
					DEFAULT: '#7c3aed',
					dark: '#7c3aed'
				},
				'on-primary': {
					light: '#FFFFFF',
					DEFAULT: '#FFFFFF',
					dark: '#FFFFFF'
				},
				// secondary: {
				// 	light: colors.indigo[600],
				// 	DEFAULT: '#F2F2F2',
				// 	dark: colors.indigo[600]
				// },
				// 'on-secondary': {
				// 	light: '#000000',
				// 	DEFAULT: '#000000',
				// 	dark: '#000000'
				// },
				background: {
					light: '#FFFFFF',
					DEFAULT: '#FFFFFF',
					dark: '#111827'
				},
				'on-background': {
					light: '#000000',
					DEFAULT: '#000000',
					dark: '#FFFFFF'
				},
				surface: {
					light: '#f9f9f9',
					DEFAULT: '#FFFFFF',
					dark: '#1f2937'
				},
				'on-surface': {
					light: '#000000',
					DEFAULT: '#000000',
					dark: '#FFFFFF'
				},
				error: {
					light: '#FF0000',
					DEFAULT: '#FF0000',
					dark: '#FF0000'
				},
				'on-error': {
					light: '#FFFFFF',
					DEFAULT: '#FFFFFF',
					dark: '#FFFFFF'
				}
			}
		}
	},
	plugins: []
	// experimental: {
	//   applyComplexClasses: true,
	// }
}
