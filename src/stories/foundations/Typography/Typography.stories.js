import HeadingsTemplate from './templates/Headings.html';
import ParagraphsTemplate from './templates/Paragraphs.html';
import LinksTemplate from './templates/Links.html';
import ListsTemplate from './templates/Lists.html';
import CodeTemplate from './templates/Code.html';

import { QgContent } from '../../decorators';

export default {
  title: 'Foundations/Typography',
};

export const Headings = {
  render: () => HeadingsTemplate,
  name: 'Headings',
};

export const Paragraphs = {
  render: () => ParagraphsTemplate,
  name: 'Paragraphs',
};

export const Links = {
  render: () => LinksTemplate,
  name: 'Links',
  decorators: [QgContent],

  parameters: {
    docs: {
      source: {
        code: LinksTemplate,
      },
    },
  },
};

export const Lists = {
  render: () => ListsTemplate,
  name: 'Lists',
};

export const Code = {
  render: () => CodeTemplate,
  name: 'Code',
};
