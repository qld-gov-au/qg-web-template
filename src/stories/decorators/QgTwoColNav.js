import { DecoratorBase } from './DecoratorBase';

export const QgTwoColNav = (Child) => {
  const elem = DecoratorBase('div', Child);
  elem.id = 'qg-two-col-nav';
  return elem;
};
