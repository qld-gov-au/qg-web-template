import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import Blue from "./templates/Blue.html";
import WithButtonBottom from "./templates/WithButtonBottom.html";
import WithButtonRight from "./templates/WithButtonRight.html";
import WithButtonLeft from "./templates/WithButtonLeft.html";
import WithImage from "./templates/WithImage.html";

export default {
  title: "Components/Callout",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const Blue = {
  render: () => Blue,
  name: "Blue",
  parameters: getDecoratedParameters(Blue),
};

export const WithButtonBottom = {
  render: () => WithButtonBottom,
  name: "WithButtonBottom",
  parameters: getDecoratedParameters(WithButtonBottom),
};

export const WithButtonRight = {
  render: () => WithButtonRight,
  name: "WithButtonRight",
  parameters: getDecoratedParameters(WithButtonRight),
};

export const WithButtonLeft = {
  render: () => WithButtonLeft,
  name: "WithButtonLeft",
  parameters: getDecoratedParameters(WithButtonLeft),
};

export const WithImage = {
  render: () => WithImage,
  name: "WithImage",
  parameters: getDecoratedParameters(WithImage),
};
