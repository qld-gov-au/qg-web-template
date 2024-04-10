import AlertTemplate from './templates/Alert.html';
import BrandTemplate from './templates/Brand.html';
import TextTemplate from './templates/Text.html';

export default {
  title: 'Foundations/Color',
};

export const Text = {
  render: () => TextTemplate,
  name: 'Text',
};

export const Brand = {
  render: () => BrandTemplate,
  name: 'Brand',
};

export const Alert = {
  render: () => AlertTemplate,
  name: 'Alert',
};
