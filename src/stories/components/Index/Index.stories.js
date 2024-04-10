import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import BasicTemplate from './templates/Basic.html';

export default {
  title: 'Components/Index',
  decorators: [QgPrimaryContent, QgContent],
};

export const Basic = {
  render: () => BasicTemplate,
  name: 'Basic',
  parameters: getDecoratedParameters(BasicTemplate),
};
