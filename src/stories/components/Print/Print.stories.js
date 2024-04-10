import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import PrintGuideTemplate from './templates/PrintGuide.html';

export default {
  title: 'Components/Print',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const PrintGuide = {
  render: () => PrintGuideTemplate,
  name: 'PrintGuide',
  parameters: getDecoratedParameters(PrintGuideTemplate),
};
