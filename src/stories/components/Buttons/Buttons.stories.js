import { QgPrimaryContent, QgContent, Grid } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import PrimaryTemplate from './templates/Primary.html';
import SecondaryTemplate from './templates/Secondary.html';
import TertiaryTemplate from './templates/Tertiary.html';
import OutlineTemplate from './templates/Outline.html';
import GlobalTemplate from './templates/Global.html';
import LoadingTemplate from './templates/Loading.html';
import StatesTemplate from './templates/States.html';
import LinksTemplate from './templates/Links.html';

export default {
  title: 'Components/Buttons',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const Primary = {
  render: () => PrimaryTemplate,
  name: 'Primary',
  parameters: getDecoratedParameters(PrimaryTemplate),
};

export const Secondary = {
  render: () => SecondaryTemplate,
  name: 'Secondary',
  parameters: getDecoratedParameters(SecondaryTemplate),
};

export const Tertiary = {
  render: () => TertiaryTemplate,
  name: 'Tertiary',
  parameters: getDecoratedParameters(TertiaryTemplate),
};

export const Outline = {
  render: () => OutlineTemplate,
  name: 'Outline',
  parameters: getDecoratedParameters(OutlineTemplate),
};

export const Global = {
  render: () => GlobalTemplate,
  name: 'Global',
  parameters: getDecoratedParameters(GlobalTemplate),
};

export const Loading = {
  render: () => LoadingTemplate,
  name: 'Loading',
  parameters: getDecoratedParameters(LoadingTemplate),
};

export const States = {
  render: () => StatesTemplate,
  name: 'States',
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(StatesTemplate),
};

export const Links = {
  render: () => LinksTemplate,
  name: 'Links',
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(LinksTemplate),
};
