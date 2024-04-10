import Headings from "./templates/Headings.html";
import Paragraphs from "./templates/Paragraphs.html";
import Links from "./templates/Links.html";
import Lists from "./templates/Lists.html";
import Code from "./templates/Code.html";

import { QgContent } from "../../decorators";

export default {
  title: "Foundations/Typography",
};

export const Headings = {
  render: () => Headings,
  name: "Headings",
};

export const Paragraphs = {
  render: () => Paragraphs,
  name: "Paragraphs",
};

export const Links = {
  render: () => Links,
  name: "Links",
  decorators: [QgContent],

  parameters: {
    docs: {
      source: {
        code: Links,
      },
    },
  },
};

export const Lists = {
  render: () => Lists,
  name: "Lists",
};

export const Code = {
  render: () => Code,
  name: "Code",
};
