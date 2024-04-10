import {
  getStoryMobileParameters,
  getStoryMobileHeight,
} from '../../helpers';

import DefaultTemplate from '../../../template-pages/topic-index-page.html';
import WithAsideTemplate from '../../../template-pages/topic-index-page-with-aside.html';
import WithThumbnailsTemplate from '../../../template-pages/topic-index-page-with-thumbnails.html';

export default {
  title: 'Templates/TopicIndexPage',
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
};

export const WithAside = {
  render: () => WithAsideTemplate,
  name: 'WithAside',
};

export const WithThumbnails = {
  render: () => WithThumbnailsTemplate,
  name: 'WithThumbnails',
};

export const Mobile = {
  render: () => DefaultTemplate,
  name: 'Mobile',
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
