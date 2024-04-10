import { QgPrimaryContent, QgContent, Grid } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import Primary from "./templates/Primary.html";
import Secondary from "./templates/Secondary.html";
import Tertiary from "./templates/Tertiary.html";
import Outline from "./templates/Outline.html";
import Global from "./templates/Global.html";
import Loading from "./templates/Loading.html";
import States from "./templates/States.html";
import Links from "./templates/Links.html";

export default {
  title: "Components/Buttons",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const Primary = {
  render: () => Primary,
  name: "Primary",
  parameters: getDecoratedParameters(Primary),
};

export const Secondary = {
  render: () => Secondary,
  name: "Secondary",
  parameters: getDecoratedParameters(Secondary),
};

export const Tertiary = {
  render: () => Tertiary,
  name: "Tertiary",
  parameters: getDecoratedParameters(Tertiary),
};

export const Outline = {
  render: () => Outline,
  name: "Outline",
  parameters: getDecoratedParameters(Outline),
};

export const Global = {
  render: () => Global,
  name: "Global",
  parameters: getDecoratedParameters(Global),
};

export const Loading = {
  render: () => Loading,
  name: "Loading",
  parameters: getDecoratedParameters(Loading),
};

export const States = {
  render: () => States,
  name: "States",
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(States),
};

export const Links = {
  render: () => Links,
  name: "Links",
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(Links),
};
