import { QgPrimaryContent, QgContent, Grid } from "../../decorators";
import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
  getDecoratedParameters,
} from "../../helpers";

import Default from "./templates/Default.html";
import Subtitle from "./templates/Subtitle.html";
import Icon from "./templates/Icon.html";
import Expandable from "./templates/Expandable.html";
import Mobile from "./templates/Default.html";
import States from "./templates/States.html";

export default {
  title: "Components/Accordion",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const Subtitle = {
  render: () => Subtitle,
  name: "Subtitle",
  parameters: getDecoratedParameters(Subtitle),
};

export const Icon = {
  render: () => Icon,
  name: "Icon",
  parameters: getDecoratedParameters(Icon),
};

export const Expandable = {
  render: () => Expandable,
  name: "Expandable",
  parameters: getDecoratedParameters(Expandable),
};

export const States = {
  render: () => States,
  name: "States",
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(States),
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};
