const El = ({ element, child, ...rest }) => {
  const el = document.createElement(element);
  for (const key in rest) {
    el[key] = rest[key];
  }
  if (Array.isArray(child)) {
    el.append(...child);
    // child.forEach((ch) => el.append(ch));
  } else {
    el.append(child);
  }
  return el;
};
export default El;
