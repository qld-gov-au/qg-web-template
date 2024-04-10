import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from './templates/Header.html';
import SearchTemplate from './templates/Search.html';

export default {
  title: 'Components/Header',
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
};

export const Mobile = {
  render: () => DefaultTemplate,
  name: 'Mobile',
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};

export const Search = {
  render: () => SearchTemplate,
  name: 'Search',
  height: '350px',
};
