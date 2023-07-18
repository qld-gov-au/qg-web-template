// .storybook/main.js

import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/Introduction.mdx", //First page to load
    "../src/**/*.mdx",
    "../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"], // *.mdx is default, *.stories.(mdx|js|jsx|ts|ts) is V6 way)
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states"
  ],
  staticDirs: ['../build', 'storybook-static'],
  previewMainTemplate: "./.storybook/previewMainTemplate.ejs", //see https://storybook.js.org/docs/react/addons/writing-presets for example link
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  webpackFinal: async (config) => {

    // Make whatever fine-grained changes you need

    //Don't use static cdn on storybook, use internal
    //Handle templates by referencing built assets where required so webpack can compact them and
    //not throw errors
    config.module.rules.unshift(
      {
        test: /\.html$/,
        loader: 'string-replace-loader',
        options: {
          search: 'https://static.qgov.net.au',
          replace: './',
          flags: 'g'
        }
      },
      {
        test: /\.html$/,
        loader: 'string-replace-loader',
        options: {
          search: '"/assets/',
          replace: '"./../../build/assets/',
          flags: 'g'
        }
      },
    )

    config.module.rules.forEach(rule => {
      const pattern = /html-loader/;
      if (rule.use && pattern.test(rule.use)) { //if html-loader plugin.
        rule.use = [
          {
            loader: "html-loader",
            options: {
              minimize: false,
              esModule: false,
            },
          },
          {
            loader: "webpack-ssi-include-loader",
            options: {
              localPath: "/",
              location: process.env.PUBLIC_PATH?.replace(/\/+$/, "") || "http://localhost:6006",
              // http url where the file can be dl
              onFileMatch: (filePath, fileContent, isLocal) => {
                return fileContent
                  .replaceAll('virtual=".', `virtual="${filePath.slice(0, filePath.lastIndexOf("/"))}/.`)
                  .replaceAll('src="/assets', `src="${process.env.PUBLIC_PATH?.replace(/\/+$/, "") || ""}${process.env.ASSETS_PATH?.replace(/\/+$/, "") || ""}/assets`);
              }
            }
          }
          ];
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
    autodocs: true,
    defaultName: 'Docs', // set to change the name of generated docs entries
  }
};
export default config;
