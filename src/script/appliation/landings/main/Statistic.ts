// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class Statistic {
  private App: App;

  public container: ElementBuilder;

  private divTable: ElementBuilder;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('div', 'content__stat blocks');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = 'Statistic';
    this.createDivTable();
    this.container.append(h2, this.divTable);
  }

  createDivTable() {
    this.divTable = new ElementBuilder('div', 'tableDiv');
    const table1 = new ElementBuilder('div', 'table');
    const tableCont = new ElementBuilder('div', 'tableCont');
    const tableHeader = new ElementBuilder('table', 'table-header');
    const trHeader = new ElementBuilder('tr', 'trHeader');
    const th1 = new ElementBuilder('th', '');
    th1.element.innerHTML = '#';
    const th2 = new ElementBuilder('th', '');
    th2.element.innerHTML = 'Github';
    const th3 = new ElementBuilder('th', '');
    th3.element.innerHTML = 'Total Score';
    const th4 = new ElementBuilder('th', '');
    th4.element.innerHTML = 'Race';
    const th5 = new ElementBuilder('th', '');
    th5.element.innerHTML = 'Tetris';
    const th6 = new ElementBuilder('th', '');
    th6.element.innerHTML = 'Breakout';
    const th7 = new ElementBuilder('th', '');
    th7.element.innerHTML = 'Space Attack';
    const th8 = new ElementBuilder('th', '');
    th8.element.innerHTML = 'Flappy Bird';
    const th9 = new ElementBuilder('th', '');
    th9.element.innerHTML = 'Snake';
    const th10 = new ElementBuilder('th', '');
    th10.element.innerHTML = 'Snow';

    const trBody = new ElementBuilder('tr', 'trBody');
    const thB1 = new ElementBuilder('th', '');
    thB1.element.innerHTML = '1';
    const thB2 = new ElementBuilder('th', '');
    thB2.element.innerHTML = 'Username';
    const thB3 = new ElementBuilder('th', '');
    thB3.element.innerHTML = '700';
    const thB4 = new ElementBuilder('th', '');
    thB4.element.innerHTML = '100';
    const thB5 = new ElementBuilder('th', '');
    thB5.element.innerHTML = '100';
    const thB6 = new ElementBuilder('th', '');
    thB6.element.innerHTML = '100';
    const thB7 = new ElementBuilder('th', '');
    thB7.element.innerHTML = '100';
    const thB8 = new ElementBuilder('th', '');
    thB8.element.innerHTML = '100';
    const thB9 = new ElementBuilder('th', '');
    thB9.element.innerHTML = '100';
    const thB10 = new ElementBuilder('th', '');
    thB10.element.innerHTML = '100';
    const thB11 = new ElementBuilder('th', '');
    thB11.element.innerHTML = '100';
    trBody.append(thB1, thB2, thB3, thB4, thB5, thB6, thB7, thB8, thB9, thB10, thB11);

    this.divTable.append(table1);
    table1.append(tableCont);
    tableCont.append(tableHeader);
    tableHeader.append(trHeader, trBody);
    trHeader.append(th1, th2, th3, th4, th5, th6, th7, th8, th9, th10);
  }
}
