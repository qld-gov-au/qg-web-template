import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const getCanvasMobileProps = () => ({ style: INITIAL_VIEWPORTS.iphone12.styles });
export const getStoryMobileParameters = () => ({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
});
