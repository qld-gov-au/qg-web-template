import { QgPrimaryContent, QgContent } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import Youtube from "./templates/Youtube.html";
import Vimeo from "./templates/Vimeo.html";

export default {
  title: "Components/Video",
  decorators: [QgPrimaryContent, QgContent],
};

export const Youtube = {
  render: () => Youtube,
  name: "Youtube",

  parameters: {
    ...getDecoratedParameters(Youtube),

    chromatic: {
      pauseAnimationAtEnd: true,
      disableSnapshot: true,
    },
  },
};

export const Vimeo = {
  render: () => Vimeo,
  name: "Vimeo",
  parameters: getDecoratedParameters(Vimeo),
};
