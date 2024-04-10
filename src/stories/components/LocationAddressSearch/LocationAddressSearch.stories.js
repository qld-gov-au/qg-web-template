import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";

export default {
  title: "Components/Location Address Search",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};
