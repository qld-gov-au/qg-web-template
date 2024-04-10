import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "../../../template-pages/content-page.html";
import NoAside from "../../../template-pages/content-page-no-asides.html";
import WithoutLocation from "../../../template-pages/content-page-without-location.html";
import Mobile from "../../../template-pages/content-page.html";

export default {
  title: "Templates/ContentPage",
};

export const Default = {
  render: () => Default,
  name: "Default",
};

export const NoAside = {
  render: () => NoAside,
  name: "NoAside",
};

export const WithoutLocation = {
  render: () => WithoutLocation,
  name: "WithoutLocation",
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
