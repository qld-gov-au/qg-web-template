import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "./templates/Footer.html";
import Mobile from "./templates/Footer.html";

export default {
  title: "Components/Footer",
};

export const Default = {
  render: () => Default,
  name: "Default",

  parameters: {
    chromatic: {
      delay: 3000,
      disableSnapshot: true,
    },
  },
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",

  parameters: {
    ...getStoryMobileParameters(),

    chromatic: {
      disableSnapshot: true,
    },
  },

  height: getStoryMobileHeight(),
};
