import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import WithImage from "./templates/WithImage.html";

export default {
  title: "Components/Promotional Banner",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const WithImage = {
  render: () => WithImage,
  name: "WithImage",
  parameters: getDecoratedParameters(WithImage),
};
