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
  // "previewHead": (head) => (`
  //   <link href="/assets/v4/latest/css/qg-main.css" rel="stylesheet" type="text/css" media="all">
  //   ${head}
  // `),
  // "previewBody": (body) => (`
  //   ${body}
  //   testtest
  //   <script src="/assets/v4/latest/lib/all-ext-min.js"></script>
  //   <script src="/assets/v4/latest/js/qg-main.js"></script>
  // `),
  "previewMainTemplate": "./.storybook/previewMainTemplate.ejs"
}