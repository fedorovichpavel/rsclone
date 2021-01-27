// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class Game {
  public container: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', 'content__game');
    const div = new ElementBuilder('div', '');
    div.element.id = 'game';
    this.container.append(div);
  }
}
