import DashboardTemplate from './templates/Dashboard.html';
import ProjectsTemplate from './templates/Projects.html';
import TendersTemplate from './templates/Tenders.html';

import { QgPrimaryContent, QgContent } from '../../decorators';

import { getDecoratedParameters } from '../../helpers';

export default {
  title: 'Franchises/DigitalDashboard',
  decorators: [QgPrimaryContent, QgContent],
};

export const Dashboard = {
  render: () => DashboardTemplate,
  name: 'Dashboard',
  parameters: getDecoratedParameters(DashboardTemplate),
};

export const Projects = {
  render: () => ProjectsTemplate,
  name: 'Projects',
};

export const Tenders = {
  render: () => TendersTemplate,
  name: 'Tenders',
  parameters: getDecoratedParameters(TendersTemplate),
};
