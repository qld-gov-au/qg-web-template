import Dashboard from "./templates/Dashboard.html";
import Projects from "./templates/Projects.html";
import Tenders from "./templates/Tenders.html";

import { QgPrimaryContent, QgContent } from "../../decorators";

import { getDecoratedParameters } from "../../helpers";

export default {
  title: "Franchises/DigitalDashboard",
  decorators: [QgPrimaryContent, QgContent],
};

export const Dashboard = {
  render: () => Dashboard,
  name: "Dashboard",
  parameters: getDecoratedParameters(Dashboard),
};

export const Projects = {
  render: () => Projects,
  name: "Projects",
};

export const Tenders = {
  render: () => Tenders,
  name: "Tenders",
  parameters: getDecoratedParameters(Tenders),
};
