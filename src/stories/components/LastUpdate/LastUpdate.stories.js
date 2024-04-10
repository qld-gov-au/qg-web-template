import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';

export default {
  title: 'Components/Last Update',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};
