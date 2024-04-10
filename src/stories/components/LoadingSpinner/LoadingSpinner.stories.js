import { QgPrimaryContent, QgContent, Grid } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import CenterAligned from "./templates/CenterAligned.html";
import AbsoluteCenter from "./templates/AbsoluteCenter.html";

export default {
  title: "Components/Loading Spinner",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(Default),
};

export const CenterAligned = {
  render: () => CenterAligned,
  name: "CenterAligned",
  decorators: [Grid(2)],
  parameters: getDecoratedParameters(CenterAligned),
};

export const AbsoluteCenter = {
  render: () => AbsoluteCenter,
  name: "AbsoluteCenter",
  parameters: getDecoratedParameters(AbsoluteCenter),
};
