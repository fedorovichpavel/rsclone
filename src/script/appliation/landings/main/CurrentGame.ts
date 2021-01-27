// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class CurrentGame {
  public container: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', 'content__gameProp blocks');
    this.container.element.innerHTML = 'Current game name';
  }
}
