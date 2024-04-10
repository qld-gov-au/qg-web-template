import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import PrintGuide from "./templates/PrintGuide.html";

export default {
  title: "Components/Print",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const PrintGuide = {
  render: () => PrintGuide,
  name: "PrintGuide",
  parameters: getDecoratedParameters(PrintGuide),
};
