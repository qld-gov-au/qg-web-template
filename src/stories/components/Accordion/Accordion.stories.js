import { Grid, QgContent, QgPrimaryContent } from '../../decorators';
import {
  getDecoratedParameters,
  getStoryMobileHeight,
  getStoryMobileParameters,
} from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import SubtitleTemplate from './templates/Subtitle.html';
import IconTemplate from './templates/Icon.html';
import ExpandableTemplate from './templates/Expandable.html';
import StatesTemplate from './templates/States.html';

export default {
  title: 'Components/Accordion',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const Subtitle = {
  render: () => SubtitleTemplate,
  name: 'Subtitle',
  parameters: getDecoratedParameters(SubtitleTemplate),
};

export const Icon = {
  render: () => IconTemplate,
  name: 'Icon',
  parameters: getDecoratedParameters(IconTemplate),
};

export const Expandable = {
  render: () => ExpandableTemplate,
  name: 'Expandable',
  parameters: getDecoratedParameters(ExpandableTemplate),
};

export const States = {
  render: () => StatesTemplate,
  name: 'States',
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(StatesTemplate),
};

export const Mobile = {
  render: () => DefaultTemplate,
  name: 'Mobile',
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
