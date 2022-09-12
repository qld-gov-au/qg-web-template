import { DecoratorBase } from './DecoratorBase';

export const QgPrimaryContent = (Child) => {
  const elem = DecoratorBase('div', Child);
  elem.id = 'qg-primary-content';
  return elem;
};
