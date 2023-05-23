module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
	],
	darkMode: ['class', '[data-theme="dark"]'],
	daisyui: {
		themes: [
			"bumblebee",
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=forest]"],
					// "base-100": "#1e293b", //slate-800
					// "base-content": "#e2e8f0", //slate-200
					"primary":"white",
					"primary-content":"black",
					"--rounded-btn": "0.5rem"
				},
			},
		]
	},
	
}
