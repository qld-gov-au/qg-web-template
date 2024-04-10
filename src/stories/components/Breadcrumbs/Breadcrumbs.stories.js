import { QgPrimaryContent, QgContent } from "../../decorators";

import Default from "./templates/Default.html";

export default {
  title: "Components/Breadcrumbs",

  parameters: {
    chromatic: {
      delay: 1000,
    },
  },
};

export const Default = {
  render: () => Default,
  name: "Default",
};
