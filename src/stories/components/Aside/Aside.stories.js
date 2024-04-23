import DefaultTemplate from './templates/Default.html';
import IconTemplate from './templates/Icon.html';

import { QgContent } from '../../decorators';

export default {
  title: 'Components/Aside',
  decorators: [QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',

  parameters: {
    docs: {
      source: {
        code: DefaultTemplate,
      },
    },
  },
};

export const Icon = {
  render: () => IconTemplate,
  name: 'Icon',

  parameters: {
    docs: {
      source: {
        code: IconTemplate,
      },
    },
  },
};
