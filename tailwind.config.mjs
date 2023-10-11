import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				pollutants: "url('/pollutants.png')",
				"route-finding": "url('/route-finding.png')",
				clouds: "url('/clouds.png')",
				"app-image": "url('/go2-app-icon.png')",
				"clouds-2": "url('/clouds-2.png')",
			},
			fontFamily: {
				"sans": ["Lexend", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				black: "#333333",
				"go2-blue": {
					DEFAULT: "#00a1e5",
					light: "#edfaff",
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
