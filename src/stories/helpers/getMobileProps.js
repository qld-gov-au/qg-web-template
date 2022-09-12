import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const getCanvasMobileProps = () => ({ style: INITIAL_VIEWPORTS.iphone12.styles });

export const getStoryMobileParameters = () => ({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  docs: {
    // Opt-out of inline rendering
    inlineStories: false,
  },
  chromatic: { viewports: [INITIAL_VIEWPORTS.iphone12.styles.width, INITIAL_VIEWPORTS.iphone12.styles.height] },
});

export const getStoryMobileHeight = () => INITIAL_VIEWPORTS.iphone12.styles.height;
