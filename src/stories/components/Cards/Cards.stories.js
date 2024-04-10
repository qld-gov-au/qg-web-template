import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Basic from "./templates/Basic.html";
import WithActionButton from "./templates/WithActionButton.html";
import WithImage from "./templates/WithImage.html";
import WithThumbnail from "./templates/WithThumbnail.html";
import Clickable from "./templates/Clickable.html";
import CardColumns from "./templates/CardColumns.html";
import CardsWithTags from "./templates/CardsWithTags.html";

export default {
  title: "Components/Cards",
  decorators: [QgPrimaryContent, QgContent],
};

export const Basic = {
  render: () => Basic,
  name: "Basic",
  parameters: getDecoratedParameters(Basic),
};

export const WithActionButton = {
  render: () => WithActionButton,
  name: "WithActionButton",
  parameters: getDecoratedParameters(WithActionButton),
};

export const WithImage = {
  render: () => WithImage,
  name: "WithImage",
  parameters: getDecoratedParameters(WithImage),
};

export const WithThumbnail = {
  render: () => WithThumbnail,
  name: "WithThumbnail",
  parameters: getDecoratedParameters(WithThumbnail),
};

export const Clickable = {
  render: () => Clickable,
  name: "Clickable",
  parameters: getDecoratedParameters(Clickable),
};

export const CardColumns = {
  render: () => CardColumns,
  name: "CardColumns",
  parameters: getDecoratedParameters(CardColumns),
};

export const CardsWithTags = {
  render: () => CardsWithTags,
  name: "CardsWithTags",
  parameters: getDecoratedParameters(CardsWithTags),
};
