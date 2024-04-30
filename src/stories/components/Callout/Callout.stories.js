import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import BlueTemplate from './templates/Blue.html';
import WithButtonBottomTemplate from './templates/WithButtonBottom.html';
import WithButtonRightTemplate from './templates/WithButtonRight.html';
import WithButtonLeftTemplate from './templates/WithButtonLeft.html';
import WithImageTemplate from './templates/WithImage.html';

export default {
  title: 'Components/Callout',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const Blue = {
  render: () => BlueTemplate,
  name: 'Blue',
  parameters: getDecoratedParameters(BlueTemplate),
};

export const WithButtonBottom = {
  render: () => WithButtonBottomTemplate,
  name: 'WithButtonBottom',
  parameters: getDecoratedParameters(WithButtonBottomTemplate),
};

export const WithButtonRight = {
  render: () => WithButtonRightTemplate,
  name: 'WithButtonRight',
  parameters: getDecoratedParameters(WithButtonRightTemplate),
};

export const WithButtonLeft = {
  render: () => WithButtonLeftTemplate,
  name: 'WithButtonLeft',
  parameters: getDecoratedParameters(WithButtonLeftTemplate),
};

export const WithImage = {
  render: () => WithImageTemplate,
  name: 'WithImage',
  parameters: getDecoratedParameters(WithImageTemplate),
};
