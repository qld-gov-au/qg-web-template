import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import WithImageTemplate from './templates/WithImage.html';

export default {
  title: 'Components/Promotional Banner',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const WithImage = {
  render: () => WithImageTemplate,
  name: 'WithImage',
  parameters: getDecoratedParameters(WithImageTemplate),
};
