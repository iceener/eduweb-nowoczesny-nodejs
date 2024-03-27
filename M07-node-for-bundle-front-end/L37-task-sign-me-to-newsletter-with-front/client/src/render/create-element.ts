function makeElement(type: string, className = "", children: (string | HTMLElement)[] = []) {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  element.append(...children);
  return element;
}

export const div = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("div", className, children);
export const section = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("section", className, children);
export const article = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("article", className, children);
export const p = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("p", className, children);
export const input = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("input", className, children);
export const a = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("a", className, children);
export const label = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("label", className, children);
export const button = (className = "", children: (string | HTMLElement)[]  = []) => makeElement("button", className, children);
