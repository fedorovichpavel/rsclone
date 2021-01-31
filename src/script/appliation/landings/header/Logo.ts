// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import { COLOR } from '../../../utils/tools.ts';

export default class Logo {
  public container: ElementBuilder;

  public logotip: ElementBuilder;

  public name: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', 'header__logo blocks');
    this.logotip = new ElementBuilder('div', 'tetris');
    this.insetSpans(4, this.logotip, null, null);
    this.name = new ElementBuilder('h1', null);

    this.insetSpans(6, this.name, 'sym', 'TETRIS');
    this.logotip.element.style.alignItems = 'center';
    this.container.append(this.logotip);
    this.container.append(this.name);
  }

  // eslint-disable-next-line class-methods-use-this
  private insetSpans(quantity: number, inset: ElementBuilder, className: string, text: string) {
    for (let i = 0; i < quantity; i += 1) {
      const span = new ElementBuilder('span', className);
      if (text) {
        const textSpanArr = text.split('');
        span.element.innerHTML = textSpanArr[i];
        span.element.style.color = COLOR[i];
      }
      inset.append(span);
    }
  }
}
