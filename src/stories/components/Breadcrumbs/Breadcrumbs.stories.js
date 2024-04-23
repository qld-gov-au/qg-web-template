import DefaultTemplate from './templates/Default.html';

export default {
  title: 'Components/Breadcrumbs',

  parameters: {
    chromatic: {
      delay: 1000,
    },
  },
};

export const Default = {
  render: () => DefaultTemplate,
  name: 'Default',
};
