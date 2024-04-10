import Default from "./templates/Default.html";
import Icon from "./templates/Icon.html";

import { QgContent } from "../../decorators";

export default {
  title: "Components/Aside",
  decorators: [QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",

  parameters: {
    docs: {
      source: {
        code: Default,
      },
    },
  },
};

export const Icon = {
  render: () => Icon,
  name: "Icon",

  parameters: {
    docs: {
      source: {
        code: Icon,
      },
    },
  },
};
