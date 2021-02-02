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

  updateStatistics() {
    this.createDivTable();
    this.App.api.getListUsers().then((users:Array<UserDto>) => {
      users.sort((a, b) => a.totalScore - b.totalScore);
      for (let i = 0; i < users.length; i += 1) {
        const trBody = new ElementBuilder('tr', 'trBody');
        trBody.element.innerHTML = `<th>${i + 1}</th>
                                  <th class="iconAndLink">${this.addLink(users[i])}</th>
                                  <th>${users[i].totalScore}</th>
                                  <th>${users[i].race}</th>
                                  <th>${users[i].tetris}</th>
                                  <th>${users[i].breakout}</th>
                                  <th>${users[i].flappyBird}</th>
                                  <th>${users[i].spaceAttack}</th>
                                  <th>${users[i].snake}</th>
                                  <th>${users[i].snow}</th>`;
        this.tableHeader.append(trBody);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  addLink(user:UserDto):string {
    return `<img src="${user.avatar}"><a href="${user.url}" target="_blank">${user.login}</a>`;
  }
}
