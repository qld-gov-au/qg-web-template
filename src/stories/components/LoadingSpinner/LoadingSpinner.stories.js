import { QgPrimaryContent, QgContent, Grid } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import CenterAlignedTemplate from './templates/CenterAligned.html';
import AbsoluteCenterTemplate from './templates/AbsoluteCenter.html';

export default {
  title: 'Components/Loading Spinner',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const CenterAligned = {
  render: () => CenterAlignedTemplate,
  name: 'CenterAligned',
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(CenterAlignedTemplate),
};

export const AbsoluteCenter = {
  render: () => AbsoluteCenterTemplate,
  name: 'AbsoluteCenter',
  parameters: getDecoratedParameters(AbsoluteCenterTemplate),
};
