import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "../../../template-pages/aggregation-page.html";
import Mobile from "../../../template-pages/aggregation-page.html";

export default {
  title: "Templates/AggregationPage",
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
