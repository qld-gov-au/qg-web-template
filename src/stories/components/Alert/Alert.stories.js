import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import InformationTemplate from './templates/Information.html';
import SuccessTemplate from './templates/Success.html';
import WarningTemplate from './templates/Warning.html';
import CriticalTemplate from './templates/Critical.html';

export default {
  title: 'Components/Alert',
  decorators: [QgPrimaryContent, QgContent],
};

export const Information = {
  render: () => InformationTemplate,
  name: 'Information',
  parameters: getDecoratedParameters(InformationTemplate),
};

export const Success = {
  render: () => SuccessTemplate,
  name: 'Success',
  parameters: getDecoratedParameters(SuccessTemplate),
};

export const Warning = {
  render: () => WarningTemplate,
  name: 'Warning',
  parameters: getDecoratedParameters(WarningTemplate),
};

export const Critical = {
  render: () => CriticalTemplate,
  name: 'Critical',
  parameters: getDecoratedParameters(CriticalTemplate),
};
