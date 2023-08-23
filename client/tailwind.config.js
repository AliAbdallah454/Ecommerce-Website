/** @type {import('tailwindcss').Config} */

module.exports = {

	content: [
	"./src/**/*.{js,jsx,ts,tsx}",
	],
	
	theme: {
		extend: {

			height: {
				'79': '19.8rem',
			},

			width: {
				'88': '22rem'
			},

			borderWidth: {
				'1': '1px',
				'3': '3px'
			},

			colors: {
				'wilsonRed': '#cf102d' 
			}

		},
	},

	plugins: [],
	
}

