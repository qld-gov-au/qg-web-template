import DefaultTemplate from './templates/Default.html';

import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

export default {
  title: 'Components/Blockquote',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};
