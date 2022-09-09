const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../build"],
  previewMainTemplate: "./.storybook/previewMainTemplate.ejs",
  framework: "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.html?$/,
      use: [
        {
          loader: "webpack-ssi-include-loader",
          options: {
            localPath: "/",
            location: "http://localhost:6006", // http url where the file can be dl
            onFileMatch: (filePath, fileContent, isLocal) => {
              return fileContent.replaceAll(
                'virtual=".',
                `virtual="${filePath.slice(0, filePath.lastIndexOf("/"))}/.`
              );
            },
          },
        },
      ],
    });
    return config;
  },
};
