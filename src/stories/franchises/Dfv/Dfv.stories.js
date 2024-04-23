import AsideButtonTemplate from './templates/AsideButton.html';
import DfvCardsTemplate from './templates/DfvCards.html';
import DfvBackTemplate from './templates/DfvBack.html';
import LinksListTemplate from './templates/LinksList.html';

import { QgPrimaryContent, QgContent } from '../../decorators';

import { getDecoratedParameters } from '../../helpers';

export default {
  title: 'Franchises/DFV',
  decorators: [QgPrimaryContent, QgContent],
};

export const DfvCards = {
  render: () => DfvCardsTemplate,
  name: 'DfvCards',
  parameters: getDecoratedParameters(DfvCardsTemplate),
};

export const AsideButton = {
  render: () => AsideButtonTemplate,
  name: 'AsideButton',
  parameters: getDecoratedParameters(AsideButtonTemplate),
};

export const DfvBack = {
  render: () => DfvBackTemplate,
  name: 'DfvBack',
  parameters: getDecoratedParameters(DfvBackTemplate),
};

export const LinksList = {
  render: () => LinksListTemplate,
  name: 'LinksList',
  parameters: getDecoratedParameters(LinksListTemplate),
};
