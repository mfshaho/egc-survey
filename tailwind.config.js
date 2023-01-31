/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  fontFamily: {
		    'Nordeco': ['Nordeco', 'sans-serif'],
		    'Nordeco-Cyrillic': ['Nordeco Cyrillic', 'sans-serif'],
		    'Celias': ['Celias', 'sans-serif'],
			'SFAr': ['SF Arabic', 'sans-serif'],

	  },
	  colors: {
		    primary1: 'rgb(var(--color-primary1) / <alpha-value>)',
		    primary2: 'rgb(var(--color-primary2) / <alpha-value>)',
		    primary3: 'rgb(var(--color-primary3) / <alpha-value>)',
  
			dark: 'rgb(var(--color-dark) / <alpha-value>)',
			darker: 'rgb(var(--color-darker) / <alpha-value>)',
			dstroke: 'rgb(var(--color-ds) / <alpha-value>)',
		  
		    l: 'rgb(var(--color-l) / <alpha-value>)',
		    light: 'rgb(var(--color-light) / <alpha-value>)',
			lighter: 'rgb(var(--color-lighter) / <alpha-value>)',
			lstroke: 'rgb(var(--color-ls) / <alpha-value>)',
			lightSkeleton: 'rgb(var(--color-light-skeleton) / <alpha-value>)',
	  }
	},
	plugins: [],
  }
  