import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import FacebookFeedTemplate from './templates/FacebookFeed.html';
import TwitterFeedTemplate from './templates/TwitterFeed.html';

export default {
  title: 'Components/Social Media',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const FacebookFeed = {
  render: () => FacebookFeedTemplate,
  name: 'FacebookFeed',

  parameters: {
    ...getDecoratedParameters(DefaultTemplate),

    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const TwitterFeed = {
  render: () => TwitterFeedTemplate,
  name: 'TwitterFeed',

  parameters: {
    ...getDecoratedParameters(DefaultTemplate),

    chromatic: {
      disableSnapshot: true,
    },
  },
};
