import { DecoratorBase } from './DecoratorBase';

export const Grid = (colNum = 5) => (Child) => {
  const elem = DecoratorBase('div', Child);
  elem.style = `display: grid; gap: 1rem; grid-template-columns: repeat(${colNum}, 1fr); `;
  return elem;
};
