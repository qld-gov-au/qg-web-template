import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";

export default {
  title: "Components/Tag",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  height: "50px",
  parameters: getDecoratedParameters(Default),
};
