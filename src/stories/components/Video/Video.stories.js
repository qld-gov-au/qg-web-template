import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import YoutubeTemplate from './templates/Youtube.html';
import VimeoTemplate from './templates/Vimeo.html';

export default {
  title: 'Components/Video',
  decorators: [QgPrimaryContent, QgContent],
};

export const Youtube = {
  render: () => Youtube,
  name: 'Youtube',

  parameters: {
    ...getDecoratedParameters(YoutubeTemplate),

    chromatic: {
      pauseAnimationAtEnd: true,
      disableSnapshot: true,
    },
  },
};

export const Vimeo = {
  render: () => Vimeo,
  name: 'Vimeo',
  parameters: getDecoratedParameters(VimeoTemplate),
};
