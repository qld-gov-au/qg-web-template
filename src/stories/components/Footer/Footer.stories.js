import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from './templates/Footer.html';

export default {
  title: 'Components/Footer',
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',

  parameters: {
    chromatic: {
      delay: 3000,
      disableSnapshot: true,
    },
  },
};

export const Mobile = {
  render: () => DefaultTemplate,
  name: 'Mobile',

  parameters: {
    ...getStoryMobileParameters(),

    chromatic: {
      disableSnapshot: true,
    },
  },

  height: getStoryMobileHeight(),
};
