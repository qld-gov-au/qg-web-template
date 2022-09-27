import { DecoratorBase } from './DecoratorBase';

export const QgPrimary = (Child) => {
  const elem = DecoratorBase('div', Child);
  elem.id = 'qg-primary';
  return elem;
};
