const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/addon-mdx-gfm",
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },],
  staticDirs: ["../build"],
  previewMainTemplate: "./.storybook/previewMainTemplate.ejs",
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  webpackFinal: async (config, {
    configType
  }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.module.rules.forEach(rule => {
      const pattern = /html-loader/;
      if (rule.use && pattern.test(rule.use)) {
        rule.use = [{
          loader: "html-loader",
          options: {
            attributes: false
          }
        }, {
          loader: "webpack-ssi-include-loader",
          options: {
            localPath: "/",
            location: process.env.PUBLIC_PATH?.replace(/\/+$/, "") || "http://localhost:6006",
            // http url where the file can be dl
            onFileMatch: (filePath, fileContent, isLocal) => {
              return fileContent.replaceAll('virtual=".', `virtual="${filePath.slice(0, filePath.lastIndexOf("/"))}/.`).replaceAll('src="/assets', `src="${process.env.PUBLIC_PATH?.replace(/\/+$/, "") || ""}${process.env.ASSETS_PATH?.replace(/\/+$/, "") || ""}/assets`);
            }
          }
        }];
      }
    });
    config.plugins.push(new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, "../src/stories/assets"),
        to: "assets"
      }]
    }));
    if (process.env.PUBLIC_PATH) config.output.publicPath = process.env.PUBLIC_PATH;
    // force source snippet to be un-minified
    config.mode = "development";
    // instead of default config.optimization.chunkIds = "natural", because there is github pages deployment issue, filename begin with 'node_modules' will get excluded by Jekyll build
    config.optimization.chunkIds = "deterministic";
    return config;
  },
  docs: {
    autodocs: true
  }
};
export default config;
