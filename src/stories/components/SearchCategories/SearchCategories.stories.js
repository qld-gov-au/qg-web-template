import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Basic from "./templates/Basic.html";

export default {
  title: "Components/Search Categories",
  decorators: [QgPrimaryContent, QgContent],
};

export const Basic = {
  render: () => Basic,
  name: "Basic",
  parameters: getDecoratedParameters(Basic),
};
