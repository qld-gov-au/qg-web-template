import { QgPrimaryContent, QgTwoColNav, Grid } from "../../decorators";
import { getDecoratedParameters } from "../../helpers";

import TextInput from "./templates/TextInput.html";
import Textarea from "./templates/Textarea.html";
import Checkbox from "./templates/Checkbox.html";
import CheckboxCustom from "./templates/CheckboxCustom.html";
import CheckboxStates from "./templates/CheckboxStates.html";
import Radio from "./templates/Radio.html";
import RadioCustom from "./templates/RadioCustom.html";
import RadioStates from "./templates/RadioStates.html";
import Select from "./templates/Select.html";
import DatePicker from "./templates/DatePicker.html";
import Validation from "./templates/Validation.html";
import Hint from "./templates/Hint.html";
import HintInfo from "./templates/HintInfo.html";

export default {
  title: "Components/Forms",
  decorators: [QgTwoColNav, QgPrimaryContent],
};

export const TextInput = {
  render: () => TextInput,
  name: "TextInput",

  parameters: {
    docs: {
      source: {
        code: TextInput,
      },
    },
  },
};

export const Textarea = {
  render: () => Textarea,
  name: "Textarea",

  parameters: {
    docs: {
      source: {
        code: Textarea,
      },
    },
  },
};

export const Checkbox = {
  render: () => Checkbox,
  name: "Checkbox",

  parameters: {
    docs: {
      source: {
        code: Checkbox,
      },
    },
  },
};

export const CheckboxCustom = {
  render: () => CheckboxCustom,
  name: "CheckboxCustom",

  parameters: {
    docs: {
      source: {
        code: CheckboxCustom,
      },
    },
  },
};

export const CheckboxStates = {
  render: () => CheckboxStates,
  name: "CheckboxStates",
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(CheckboxStates),
};

export const Radio = {
  render: () => Radio,
  name: "Radio",

  parameters: {
    docs: {
      source: {
        code: Radio,
      },
    },
  },
};

export const RadioCustom = {
  render: () => RadioCustom,
  name: "RadioCustom",

  parameters: {
    docs: {
      source: {
        code: RadioCustom,
      },
    },
  },
};

export const RadioStates = {
  render: () => RadioStates,
  name: "RadioStates",
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(RadioStates),
};

export const Select = {
  render: () => Select,
  name: "Select",

  parameters: {
    docs: {
      source: {
        code: Select,
      },
    },
  },
};

export const DatePicker = {
  render: () => DatePicker,
  name: "DatePicker",

  parameters: {
    docs: {
      source: {
        code: DatePicker,
      },
    },
  },
};

export const Validation = {
  render: () => Validation,
  name: "Validation",

  parameters: {
    docs: {
      source: {
        code: Validation,
      },
    },
  },
};

export const Hint = {
  render: () => Hint,
  name: "Hint",

  parameters: {
    docs: {
      source: {
        code: Hint,
      },
    },
  },
};

export const HintInfo = {
  render: () => HintInfo,
  name: "HintInfo",

  parameters: {
    docs: {
      source: {
        code: HintInfo,
      },
    },
  },
};
