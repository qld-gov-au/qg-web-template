import { QgPrimaryContent, QgContent } from '../../decorators';
import { getDecoratedParameters } from '../../helpers';

import ShortTemplate from './templates/Short.html';
import LongTemplate from './templates/Long.html';
import InTableTemplate from './templates/InTable.html';

export default {
  title: 'Components/Correct Incorrect',
  decorators: [QgPrimaryContent, QgContent],
};

export const Short = {
  render: () => ShortTemplate,
  name: 'Short',
  parameters: getDecoratedParameters(ShortTemplate),
};

export const Long = {
  render: () => LongTemplate,
  name: 'Long',
  parameters: getDecoratedParameters(LongTemplate),
};

export const InTable = {
  render: () => InTableTemplate,
  name: 'InTable',
  parameters: getDecoratedParameters(InTableTemplate),
};
