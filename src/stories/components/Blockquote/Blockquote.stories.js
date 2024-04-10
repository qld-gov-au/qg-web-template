import Default from "./templates/Default.html";

import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

export default {
  title: "Components/Blockquote",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};
