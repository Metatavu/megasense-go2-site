import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				pollutants: "url('/pollutants.png')",
				"route-finding": "url('/route-finding.png')",
				"clouds-bottom": "url('/clouds-bottom.png')",
				"clouds-bottom-lg": "url('/clouds-bottom-lg.png')",
				"app-image": "url('/go2-app-icon.png')",
				"clouds-top": "url('/clouds-top.png')",
				"clouds-top-lg": "url('/clouds-top-lg.png')",
			},
			fontFamily: {
				"sans": ["Lexend", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: "#333333",
				"go2-blue": {
					DEFAULT: "#00a1e5",
					light: "#d9f1fb",
					hover: "#ccdce3",
					dark: "#1f2d33"
				}
			},
			maxHeight: {
				"home-hero-image": "30vh",
				"hero-image": "40vh"
			}
		},
	},
	plugins: [],
};
