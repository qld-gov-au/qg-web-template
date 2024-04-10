import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import BasicTemplate from './templates/Basic.html';

export default {
  title: 'Components/Search Categories',
  decorators: [QgPrimaryContent, QgContent],
};

export const Basic = {
  render: () => BasicTemplate,
  name: 'Basic',
  parameters: getDecoratedParameters(BasicTemplate),
};
