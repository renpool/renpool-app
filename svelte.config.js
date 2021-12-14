import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
export default {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],

    kit: {
        adapter: adapter(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",

        vite: {
            mode: process.env.MODE || "development",
        },
    },
};
