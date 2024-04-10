import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import FacebookFeed from "./templates/FacebookFeed.html";
import TwitterFeed from "./templates/TwitterFeed.html";

export default {
  title: "Components/Social Media",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const FacebookFeed = {
  render: () => FacebookFeed,
  name: "FacebookFeed",

  parameters: {
    ...getDecoratedParameters(Default),

    chromatic: {
      disableSnapshot: true,
    },
  },
};

export const TwitterFeed = {
  render: () => TwitterFeed,
  name: "TwitterFeed",

  parameters: {
    ...getDecoratedParameters(Default),

    chromatic: {
      disableSnapshot: true,
    },
  },
};
