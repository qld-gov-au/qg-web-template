import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';

export default {
  title: 'Components/Pagination',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};
