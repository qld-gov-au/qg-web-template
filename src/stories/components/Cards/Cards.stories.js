import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import BasicTemplate from './templates/Basic.html';
import WithActionButtonTemplate from './templates/WithActionButton.html';
import WithImageTemplate from './templates/WithImage.html';
import WithThumbnailTemplate from './templates/WithThumbnail.html';
import ClickableTemplate from './templates/Clickable.html';
import CardColumnsTemplate from './templates/CardColumns.html';
import CardsWithTagsTemplate from './templates/CardsWithTags.html';

export default {
  title: 'Components/Cards',
  decorators: [QgPrimaryContent, QgContent],
};

export const Basic = {
  render: () => Basic,
  name: 'Basic',
  parameters: getDecoratedParameters(BasicTemplate),
};

export const WithActionButton = {
  render: () => WithActionButton,
  name: 'WithActionButton',
  parameters: getDecoratedParameters(WithActionButtonTemplate),
};

export const WithImage = {
  render: () => WithImage,
  name: 'WithImage',
  parameters: getDecoratedParameters(WithImageTemplate),
};

export const WithThumbnail = {
  render: () => WithThumbnail,
  name: 'WithThumbnail',
  parameters: getDecoratedParameters(WithThumbnailTemplate),
};

export const Clickable = {
  render: () => Clickable,
  name: 'Clickable',
  parameters: getDecoratedParameters(ClickableTemplate),
};

export const CardColumns = {
  render: () => CardColumns,
  name: 'CardColumns',
  parameters: getDecoratedParameters(CardColumnsTemplate),
};

export const CardsWithTags = {
  render: () => CardsWithTags,
  name: 'CardsWithTags',
  parameters: getDecoratedParameters(CardsWithTagsTemplate),
};
