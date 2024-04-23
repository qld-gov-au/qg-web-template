import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from '../../../template-pages/application-page.html';

export default {
  title: 'Templates/ApplicationPage',
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
