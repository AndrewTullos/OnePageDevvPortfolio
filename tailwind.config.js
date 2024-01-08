/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "#05386B",
				"green-blue": "#379683",
				"light-green": "#5CDB95", // Main background color
				"mint-green": "#8EE4AF",
				"off-white": "#EDF5E1",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
