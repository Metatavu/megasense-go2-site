import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				pollutants: "url('/pollutants.png')",
				"route-finding": "url('/route-finding.png')",
			},
			fontFamily: {
				"sans": ["Lexend", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: "#333333",
				"go2-blue": {
					DEFAULT: "#00a1e5",
					light: "#edfaff",
					hover: "#ccdce3"
				}
			},
		},
	},
	plugins: [],
};
