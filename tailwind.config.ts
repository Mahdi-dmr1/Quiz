import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				quicksand: ["var(--font-quicksand)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
export default config;
