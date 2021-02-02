// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import { STATISTIC_HEADER } from '../../../utils/tools.ts';
// @ts-ignore
import UserDto from '../../games/dto/UserDto.ts';

export default class Statistic {
  private App: App;

  public container: ElementBuilder;

  private divTable: ElementBuilder;

  private tableHeader: ElementBuilder;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('div', 'content__stat blocks');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = 'Statistic';
    this.updateStatistics();
    this.container.append(h2, this.divTable);
  }

  createDivTable() {
    this.divTable = new ElementBuilder('div', 'tableDiv');
    const table1 = new ElementBuilder('div', 'table');
    const tableCont = new ElementBuilder('div', 'tableCont');
    this.tableHeader = new ElementBuilder('table', 'table-header');
    this.tableHeader.element.innerHTML = '';
    const trHeader = new ElementBuilder('tr', 'trHeader');

    for (let i = 0; i < STATISTIC_HEADER.length; i += 1) {
      const th = new ElementBuilder('th', '');
      th.element.innerHTML = STATISTIC_HEADER[i];
      trHeader.append(th);
    }

    this.tableHeader.append(trHeader);
    this.divTable.append(table1);
    table1.append(tableCont);
    tableCont.append(this.tableHeader);
  }

  private updateStatistics() {
    this.createDivTable();
    this.App.api.getListUsers().then((users:Array<UserDto>) => {
      console.log(users);
      for (let i = 0; i < 6; i += 1) {
        const trBody = new ElementBuilder('tr', 'trBody');
        trBody.element.innerHTML = `<th>PLace</th>
                                  <th>NickName</th>
                                  <th>totalScore</th>
                                  <th>race</th>
                                  <th>tetris</th>
                                  <th>breakout</th>
                                  <th>flappyBird</th>
                                  <th>spaceAttack</th>
                                  <th>snake</th>
                                  <th>snow</th>`;
        this.tableHeader.append(trBody);
      }
    });
  }
}
