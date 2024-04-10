import { QgPrimaryContent, QgTwoColNav, Grid } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import TextInputTemplate from './templates/TextInput.html';
import TextareaTemplate from './templates/Textarea.html';
import CheckboxTemplate from './templates/Checkbox.html';
import CheckboxCustomTemplate from './templates/CheckboxCustom.html';
import CheckboxStatesTemplate from './templates/CheckboxStates.html';
import RadioTemplate from './templates/Radio.html';
import RadioCustomTemplate from './templates/RadioCustom.html';
import RadioStatesTemplate from './templates/RadioStates.html';
import SelectTemplate from './templates/Select.html';
import DatePickerTemplate from './templates/DatePicker.html';
import ValidationTemplate from './templates/Validation.html';
import HintTemplate from './templates/Hint.html';
import HintInfoTemplate from './templates/HintInfo.html';

export default {
  title: 'Components/Forms',
  decorators: [QgTwoColNav, QgPrimaryContent],
};

export const TextInput = {
  render: () => TextInputTemplate,
  name: 'TextInput',

  parameters: {
    docs: {
      source: {
        code: TextInputTemplate,
      },
    },
  },
};

export const Textarea = {
  render: () => TextareaTemplate,
  name: 'Textarea',

  parameters: {
    docs: {
      source: {
        code: TextareaTemplate,
      },
    },
  },
};

export const Checkbox = {
  render: () => CheckboxTemplate,
  name: 'Checkbox',

  parameters: {
    docs: {
      source: {
        code: CheckboxTemplate,
      },
    },
  },
};

export const CheckboxCustom = {
  render: () => CheckboxCustomTemplate,
  name: 'CheckboxCustom',

  parameters: {
    docs: {
      source: {
        code: CheckboxCustomTemplate,
      },
    },
  },
};

export const CheckboxStates = {
  render: () => CheckboxStatesTemplate,
  name: 'CheckboxStates',
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(CheckboxStatesTemplate),
};

export const Radio = {
  render: () => RadioTemplate,
  name: 'Radio',

  parameters: {
    docs: {
      source: {
        code: RadioTemplate,
      },
    },
  },
};

export const RadioCustom = {
  render: () => RadioCustomTemplate,
  name: 'RadioCustom',

  parameters: {
    docs: {
      source: {
        code: RadioCustomTemplate,
      },
    },
  },
};

export const RadioStates = {
  render: () => RadioStatesTemplate,
  name: 'RadioStates',
  decorators: [Grid(5)],
  parameters: getDecoratedParameters(RadioStatesTemplate),
};

export const Select = {
  render: () => SelectTemplate,
  name: 'Select',

  parameters: {
    docs: {
      source: {
        code: SelectTemplate,
      },
    },
  },
};

export const DatePicker = {
  render: () => DatePickerTemplate,
  name: 'DatePicker',

  parameters: {
    docs: {
      source: {
        code: DatePickerTemplate,
      },
    },
  },
};

export const Validation = {
  render: () => ValidationTemplate,
  name: 'Validation',

  parameters: {
    docs: {
      source: {
        code: ValidationTemplate,
      },
    },
  },
};

export const Hint = {
  render: () => HintTemplate,
  name: 'Hint',

  parameters: {
    docs: {
      source: {
        code: HintTemplate,
      },
    },
  },
};

export const HintInfo = {
  render: () => HintInfoTemplate,
  name: 'HintInfo',

  parameters: {
    docs: {
      source: {
        code: HintInfoTemplate,
      },
    },
  },
};
