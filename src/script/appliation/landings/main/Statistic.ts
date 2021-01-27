// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class Statistic {
  private App: App;

  public container: ElementBuilder;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('div', 'content__stat blocks');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = 'Statistic';
    const p1 = new ElementBuilder('p', '');
    p1.element.innerHTML = 'User: Name';
    const p2 = new ElementBuilder('p', '');
    p2.element.innerHTML = 'Game: NameGame';
    const p3 = new ElementBuilder('p', '');
    p3.element.innerHTML = 'Score: 0000';
    this.container.append(h2, p1, p2, p3);
  }
}
