export const createElement = (innerHTML) => {
  const div = document.createElement('div');
  div.innerHTML = innerHTML;
  return div.firstElementChild;
};
