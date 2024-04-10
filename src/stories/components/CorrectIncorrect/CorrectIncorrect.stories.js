import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Short from "./templates/Short.html";
import Long from "./templates/Long.html";
import InTable from "./templates/InTable.html";

export default {
  title: "Components/Correct Incorrect",
  decorators: [QgPrimaryContent, QgContent],
};

export const Short = {
  render: () => Short,
  name: "Short",
  parameters: getDecoratedParameters(Short),
};

export const Long = {
  render: () => Long,
  name: "Long",
  parameters: getDecoratedParameters(Long),
};

export const InTable = {
  render: () => InTable,
  name: "InTable",
  parameters: getDecoratedParameters(InTable),
};
