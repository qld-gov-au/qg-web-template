import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Information from "./templates/Information.html";
import Success from "./templates/Success.html";
import Warning from "./templates/Warning.html";
import Critical from "./templates/Critical.html";

export default {
  title: "Components/Alert",
  decorators: [QgPrimaryContent, QgContent],
};

export const Information = {
  render: () => Information,
  name: "Information",
  parameters: getDecoratedParameters(Information),
};

export const Success = {
  render: () => Success,
  name: "Success",
  parameters: getDecoratedParameters(Success),
};

export const Warning = {
  render: () => Warning,
  name: "Warning",
  parameters: getDecoratedParameters(Warning),
};

export const Critical = {
  render: () => Critical,
  name: "Critical",
  parameters: getDecoratedParameters(Critical),
};
