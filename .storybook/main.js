// const SSICompileWebpackplugin = require('ssi-webpack-plugin');
// const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "staticDirs": ['../build'],
  "previewMainTemplate": "./.storybook/previewMainTemplate.ejs",
  "webpackFinal": async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // config.module.rules.push({
    //   test: /\.html?$/,
    //   use: [
    //     // {
    //     //   loader: 'html-loader', // Used to output as html
    //     // },
    //     {
    //       loader: 'webpack-ssi-include-loader',
    //       options: {
    //         localPath: '/',
    //         location: "http://localhost:6006/", // http url where the file can be dl
    //       },
    //     },
    //   ],
    // });
    // config.module.rules.push({
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   use: { loader: 'babel-loader' }
    // });
    // config.plugins.push(new SSICompileWebpackplugin({
    //     publicPath: '',
    //     localBaseDir: '/',
    //     minify: false,
    //     remoteBasePath:"http://localhost:6006",
    // }));

    // Return the altered config
    return config;
  },
  // "babel": async (options) => ({
  //   ...options,
  //   // any extra options you want to set
  // }),
}