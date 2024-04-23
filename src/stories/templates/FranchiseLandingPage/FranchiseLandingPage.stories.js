import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from '../../../template-pages/franchise-landing-page.html';

export default {
  title: 'Templates/FranchiseLandingPage',
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
