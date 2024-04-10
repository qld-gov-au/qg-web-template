import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Default from "./templates/Default.html";
import Bordered from "./templates/Bordered.html";
import NoStripe from "./templates/NoStripe.html";
import Searchable from "./templates/Searchable.html";

export default {
  title: "Components/Table",
  decorators: [QgPrimaryContent, QgContent],
};

export const Default = {
  render: () => Default,
  name: "Default",
  parameters: getDecoratedParameters(Default),
};

export const Bordered = {
  render: () => Bordered,
  name: "Bordered",
  parameters: getDecoratedParameters(Bordered),
};

export const NoStripe = {
  render: () => NoStripe,
  name: "NoStripe",
  parameters: getDecoratedParameters(NoStripe),
};

export const Searchable = {
  render: () => Searchable,
  name: "Searchable",
  parameters: getDecoratedParameters(Searchable),
};
