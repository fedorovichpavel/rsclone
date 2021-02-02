export default class ElementBuilder {
  public element: any;

  constructor(tagName:string, classes:string, ...dataAttr) {
    this.element = document.createElement(tagName);
    if (classes) this.element.classList.add(...classes.split(' '));
    if (dataAttr.length) {
      dataAttr.forEach(([attrName, attrValue]) => {
        if (attrName.match(/src|href|value|id|type|alt|placeholder|cols|rows|autocorrect|spellcheck|name/)) {
          this.element.setAttribute(attrName, attrValue);
        } else {
          this.element.dataset[attrName] = attrValue;
        }
      });
    }
  }

  append(...el) {
    if (el.length) {
      el.forEach((x) => {
        this.element.append(x.element);
      });
    }
  }

  appendToBody() {
    document.body.append(this.element);
  }

  remove() {
    this.element.remove();
  }

  removeChildren() {
    this.element.innerHTML = '';
  }

  on(event, callback) {
    this.element.addEventListener(event, callback);
  }

  setDataAtr(indicator:string, name:string) {
    this.element.dataset[indicator] = name;
  }
}
