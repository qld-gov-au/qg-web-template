import {
  getCanvasMobileProps,
  getStoryMobileParameters,
  getStoryMobileHeight,
} from "../../helpers";

import Default from "./templates/Header.html";
import Mobile from "./templates/Header.html";
import Search from "./templates/Search.html";

export default {
  title: "Components/Header",
};

export const Default = {
  render: () => Default,
  name: "Default",
};

export const Mobile = {
  render: () => Mobile,
  name: "Mobile",
  parameters: getStoryMobileParameters(),
  height: getStoryMobileHeight(),
};

export const Search = {
  render: () => Search,
  name: "Search",
  height: "350px",
};
