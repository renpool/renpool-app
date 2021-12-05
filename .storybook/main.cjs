
const preprocess = require('svelte-preprocess');

module.exports = {
// export default  {
  core: {
    builder: "storybook-builder-vite",
  },

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.resolve.alias.foo = 'bar';
    config.mode = 'kovan'

    // return the customized config
    return config;
},

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    // "preprocess": config.preprocess,
    preprocess: [
      preprocess({
        postcss: true,
      }),
    ],
  }
}