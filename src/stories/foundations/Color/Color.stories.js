import Alert from "./templates/Alert.html";
import Brand from "./templates/Brand.html";
import Text from "./templates/Text.html";

import { QgContent } from "../../decorators";

export default {
  title: "Foundations/Color",
};

export const Text = {
  render: () => Text,
  name: "Text",
};

export const Brand = {
  render: () => Brand,
  name: "Brand",
};

export const Alert = {
  render: () => Alert,
  name: "Alert",
};
