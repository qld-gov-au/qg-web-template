import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "../../../template-pages/topic-index-page.html";
import WithAside from "../../../template-pages/topic-index-page-with-aside.html";
import WithThumbnails from "../../../template-pages/topic-index-page-with-thumbnails.html";
import Mobile from "../../../template-pages/topic-index-page.html";

export default {
  title: "Templates/TopicIndexPage",
};

export const Default = {
  render: () => Default,
  name: "Default",
};

export const WithAside = {
  render: () => WithAside,
  name: "WithAside",
};

export const WithThumbnails = {
  render: () => WithThumbnails,
  name: "WithThumbnails",
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
