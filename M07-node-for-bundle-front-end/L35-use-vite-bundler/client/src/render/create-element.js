function makeElement(type, className = "", children = []) {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  element.append(...children);
  return element;
}

export const div = (className = "", children  = []) => makeElement("div", className, children);
export const section = (className = "", children  = []) => makeElement("section", className, children);
export const article = (className = "", children  = []) => makeElement("article", className, children);
export const p = (className = "", children  = []) => makeElement("p", className, children);
export const input = (className = "", children  = []) => makeElement("input", className, children);
export const a = (className = "", children  = []) => makeElement("a", className, children);
