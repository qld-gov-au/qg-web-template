import AsideButton from "./templates/AsideButton.html";
import DfvCards from "./templates/DfvCards.html";
import DfvBack from "./templates/DfvBack.html";
import LinksList from "./templates/LinksList.html";

import { QgPrimaryContent, QgContent } from "../../decorators";

import { getDecoratedParameters } from "../../helpers";

export default {
  title: "Franchises/DFV",
  decorators: [QgPrimaryContent, QgContent],
};

export const DfvCards = {
  render: () => DfvCards,
  name: "DfvCards",
  parameters: getDecoratedParameters(DfvCards),
};

export const AsideButton = {
  render: () => AsideButton,
  name: "AsideButton",
  parameters: getDecoratedParameters(AsideButton),
};

export const DfvBack = {
  render: () => DfvBack,
  name: "DfvBack",
  parameters: getDecoratedParameters(DfvBack),
};

export const LinksList = {
  render: () => LinksList,
  name: "LinksList",
  parameters: getDecoratedParameters(LinksList),
};
