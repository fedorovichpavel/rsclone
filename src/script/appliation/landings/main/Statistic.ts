// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import {STATISTIC_HEADER} from '../../../utils/tools.ts';
// @ts-ignore
import UserDto from '../../games/dto/UserDto.ts';

export default class Statistic {
  private App: App;

  public container: ElementBuilder;

  private divTable: ElementBuilder;

  private divTableDiv: ElementBuilder;

  private trBody: Array<ElementBuilder>;

  private divTableCont: ElementBuilder;

  private table: ElementBuilder;

  private preload: ElementBuilder;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('div', 'content__stat blocks');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = 'Statistic';
    this.divTableDiv = new ElementBuilder('div', 'tableDiv');
    this.trBody = [];
    this.createDivTable();
    this.container.append(h2, this.divTableDiv);
  }

  createDivTable() {
    this.divTable = new ElementBuilder('div', 'table');
    this.divTableCont = new ElementBuilder('div', 'tableCont');
    this.table = new ElementBuilder('table', 'table-header');
    this.divTableCont.append(this.table);
    this.divTable.append(this.divTableCont);
    this.divTableDiv.append(this.divTable);
    this.createHeaderTable();
    this.createStatisticUsers();
  }

  // eslint-disable-next-line class-methods-use-this
  addLink(user: UserDto): string {
    return `<img src="${user.avatar}"><a href="${user.url}" target="_blank">${user.login}</a>`;
  }

  createStatisticUsers() {
    if (this.trBody) {
      this.trBody.forEach((el) => el.remove());
      this.trBody = [];
    }
    this.onPreloader();
    this.App.api.getListUsers().then((users: Array<UserDto>) => {
      users.sort((a, b) => b.totalScore - a.totalScore);

      for (let i = 0; i < users.length; i += 1) {
        const tr = new ElementBuilder('tr', 'trBody');

        tr.element.innerHTML = `<th>${i + 1}</th>
                                  <th class="iconAndLink">${this.addLink(users[i])}</th>
                                  <th>${users[i].totalScore}</th>
                                  <th>${users[i].race}</th>
                                  <th>${users[i].tetris}</th>
                                  <th>${users[i].breakout}</th>
                                  <th>${users[i].spaceAttack}</th>
                                  <th>${users[i].flappyBird}</th>
                                  <th>${users[i].snake}</th>
                                  <th>${users[i].snow}</th>`;

        this.trBody.push(tr);
      }

      this.table.append(...this.trBody);
      this.offPreloader();
    });
  }

  createHeaderTable() {
    const trHeader = new ElementBuilder('tr', 'trHeader');
    for (let i = 0; i < STATISTIC_HEADER.length; i += 1) {
      const th = new ElementBuilder('th', '');
      th.element.innerHTML = STATISTIC_HEADER[i];
      trHeader.append(th);
    }
    this.table.append(trHeader);
  }

  onPreloader() {
    this.preload = new ElementBuilder('div', 'background');
    const arrow = new ElementBuilder('div', 'rotate');
    this.preload.append(arrow);
    this.divTableDiv.append(this.preload);
  }

  offPreloader() {
    this.preload.remove();
  }
}
