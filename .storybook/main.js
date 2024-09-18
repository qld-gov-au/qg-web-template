// .storybook/main.js

import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/Introduction.mdx",
    "../src/**/*.mdx",
    "../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"
  ], // *.mdx is default, *.stories.(mdx|js|jsx|ts|ts) is V6 way)
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  staticDirs: ['../build', 'storybook-static'],
  previewMainTemplate: "./.storybook/previewMainTemplate.ejs", //see https://storybook.js.org/docs/react/addons/writing-presets for example link
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  webpackFinal: async (configuration) => {

    // Make whatever fine-grained changes you need

    //Don't use static cdn on storybook, use internal
    //Handle templates by referencing built assets where required so webpack can compact them and
    //not throw errors
    configuration.module.rules.unshift({
        test: /\.html$/,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              search: /https:\/\/www.qld.gov.au\/__data\/assets\/image\/\d+\/\d+\//,
              replace: './assets/images/placeholders/',
              flags: 'g'
            },
            {
              search: 'https://www.smartservice.qld.gov.au/payment/minicart/',
              replace: './assets/images/placeholders/',
              flags: 'g'
            },
            {
              search: 'https://static.qgov.net.au/',
              replace: './',
              flags: 'g'
            },
            {
              search: '"/assets/',
              replace: '"./../../build/assets/',
              flags: 'g'
            }
          ]
        }
      })

    configuration.module.rules.forEach(rule => {
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
              localPath: path.join(__dirname, '/build'),
              location: "http://localhost:6006",
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
    configuration.plugins.push(new CopyPlugin({
      patterns: [{
        from: path.resolve(__dirname, "../src/stories/assets"),
        to: "assets"
      }]
    }));
    if (process.env.PUBLIC_PATH) configuration.output.publicPath = process.env.PUBLIC_PATH;
    // force source snippet to be un-minified
    configuration.mode = "development";
    // instead of default config.optimization.chunkIds = "natural", because there is github pages deployment issue, filename begin with 'node_modules' will get excluded by Jekyll build
    configuration.optimization.chunkIds = "deterministic";
    return configuration;
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs', // set to change the name of generated docs entries
  }
};
export default config;
