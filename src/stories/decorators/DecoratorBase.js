export const DecoratorBase = (tag, Child) => {
  const elem = document.createElement(tag);
  if (typeof Child === 'function') {
    elem.innerHTML = Child();
    if (typeof Child() === 'object') {
      elem.innerHTML = Child().outerHTML;
    } else {
      elem.innerHTML = Child();
    }
  } else if (Child) {
    elem.appendChild(Child);
  }
  return elem;
};
