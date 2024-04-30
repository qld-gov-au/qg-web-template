/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    // actions: {argTypesRegex: "^on[A-Z].*"}, https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    chromatic: {delay: 100},
  },
};
export default preview;
