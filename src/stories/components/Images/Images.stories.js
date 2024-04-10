import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import Figure from "./templates/Figure.html";
import WithCaptionCredits from "./templates/WithCaptionCredits.html";
import PullLeftRight from "./templates/PullLeftRight.html";
import FullWidth from "./templates/FullWidth.html";
import WithLargerImage from "./templates/WithLargerImage.html";
import WithoutBorder from "./templates/WithoutBorder.html";

export default {
  title: "Components/Images",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const Figure = {
  render: () => Figure,
  name: "Figure",
  parameters: getDecoratedParameters(Figure),
};

export const WithCaptionCredits = {
  render: () => WithCaptionCredits,
  name: "WithCaptionCredits",
  parameters: getDecoratedParameters(WithCaptionCredits),
};

export const PullLeftRight = {
  render: () => PullLeftRight,
  name: "PullLeftRight",
  parameters: getDecoratedParameters(PullLeftRight),
};

export const FullWidth = {
  render: () => FullWidth,
  name: "FullWidth",
  parameters: getDecoratedParameters(FullWidth),
};

export const WithLargerImage = {
  render: () => WithLargerImage,
  name: "WithLargerImage",
  parameters: getDecoratedParameters(WithLargerImage),
};

export const WithoutBorder = {
  render: () => WithoutBorder,
  name: "WithoutBorder",
  parameters: getDecoratedParameters(WithoutBorder),
};
