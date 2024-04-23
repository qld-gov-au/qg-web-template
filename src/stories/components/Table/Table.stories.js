import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import DefaultTemplate from './templates/Default.html';
import BorderedTemplate from './templates/Bordered.html';
import NoStripeTemplate from './templates/NoStripe.html';
import SearchableTemplate from './templates/Searchable.html';

export default {
  title: 'Components/Table',
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
  parameters: getDecoratedParameters(DefaultTemplate),
};

export const Bordered = {
  render: () => BorderedTemplate,
  name: 'Bordered',
  parameters: getDecoratedParameters(BorderedTemplate),
};

export const NoStripe = {
  render: () => NoStripeTemplate,
  name: 'NoStripe',
  parameters: getDecoratedParameters(NoStripeTemplate),
};

export const Searchable = {
  render: () => SearchableTemplate,
  name: 'Searchable',
  parameters: getDecoratedParameters(SearchableTemplate),
};
