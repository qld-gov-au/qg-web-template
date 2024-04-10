import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "../../../template-pages/application-page.html";
import Mobile from "../../../template-pages/application-page.html";

export default {
  title: "Templates/ApplicationPage",
};

export const Default = {
  render: () => Default,
  name: "Default",
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
