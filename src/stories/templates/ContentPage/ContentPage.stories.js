import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from '../../../template-pages/content-page.html';
import NoAsideTemplate from '../../../template-pages/content-page-no-asides.html';
import WithoutLocationTemplate from '../../../template-pages/content-page-without-location.html';

export default {
  title: 'Templates/ContentPage',
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
};

export const NoAside = {
  render: () => NoAsideTemplate,
  name: 'NoAside',
};

export const WithoutLocation = {
  render: () => WithoutLocationTemplate,
  name: 'WithoutLocation',
};

export const Mobile = {
  render: () => DefaultTemplate,
  name: 'Mobile',
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
