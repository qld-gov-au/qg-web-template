import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "../../../template-pages/franchise-landing-page.html";
import Mobile from "../../../template-pages/franchise-landing-page.html";

export default {
  title: "Templates/FranchiseLandingPage",
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
