import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import FigureTemplate from './templates/Figure.html';
import WithCaptionCreditsTemplate from './templates/WithCaptionCredits.html';
import PullLeftRightTemplate from './templates/PullLeftRight.html';
import FullWidthTemplate from './templates/FullWidth.html';
import WithLargerImageTemplate from './templates/WithLargerImage.html';
import WithoutBorderTemplate from './templates/WithoutBorder.html';

export default {
  title: 'Components/Images',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const Figure = {
  render: () => FigureTemplate,
  name: 'Figure',
  parameters: getDecoratedParameters(FigureTemplate),
};

export const WithCaptionCredits = {
  render: () => WithCaptionCreditsTemplate,
  name: 'WithCaptionCredits',
  parameters: getDecoratedParameters(WithCaptionCreditsTemplate),
};

export const PullLeftRight = {
  render: () => PullLeftRightTemplate,
  name: 'PullLeftRight',
  parameters: getDecoratedParameters(PullLeftRightTemplate),
};

export const FullWidth = {
  render: () => FullWidthTemplate,
  name: 'FullWidth',
  parameters: getDecoratedParameters(FullWidthTemplate),
};

export const WithLargerImage = {
  render: () => WithLargerImageTemplate,
  name: 'WithLargerImage',
  parameters: getDecoratedParameters(WithLargerImageTemplate),
};

export const WithoutBorder = {
  render: () => WithoutBorderTemplate,
  name: 'WithoutBorder',
  parameters: getDecoratedParameters(WithoutBorderTemplate),
};
