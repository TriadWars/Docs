import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom"
import icon from "astro-icon";
import ThemeObsidian from "./plugins/theme-obsidian"
import expressiveCode from "astro-expressive-code";

export default defineConfig({
    site: "https://docs.triadwars.win",
    base: "",
    build: {
        assets: "_dep"
    },
    integrations: [ 
		expressiveCode(), 
		icon(), 
		starlight({
        	plugins: [ starlightImageZoom(), ThemeObsidian() ],
        	favicon: "/favicon.png",
        	title: "Triad Wars Docs",
        	tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
        	lastUpdated: true,
        	pagination: true,
        	customCss: [
        	    "@fontsource/inter/400.css",
        	    "@fontsource/inter/600.css",
        	    "./src/styles/global.css"
        	],
        	logo: {
        	    src: "./src/assets/logo.png",
        	    replacesTitle: true,
        	},
        	head: [
        	    {
        	        tag: "meta",
        	        attrs: { property: "og:image", content: "https://raw.githubusercontent.com/TriadWars/Docs/refs/heads/main/public/logobg.png" },
        	    }
        	],
        	social: {
        	    github: "https://github.com/TriadWars/Docs",
        	},
        	editLink: {
        	    baseUrl: "https://github.com/TriadWars/Docs/edit/main/",
        	},
        	components: {
        	},
        	sidebar: [
        	    { label: "[connection] API", collapsed: true, autogenerate: { directory: "api" } }
        	]
		})
	],
});