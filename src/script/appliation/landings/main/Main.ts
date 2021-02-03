// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import Statistic from './Statistic.ts';
// @ts-ignore
import Game from './Game.ts';
// @ts-ignore
import CurrentGame from './CurrentGame.ts';

export default class Main {
  private App: App;

  public container: ElementBuilder;

  public statisticBlock: Statistic;

  private gameBlock: Game;

  private currentGameBlock: CurrentGame;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('div', 'content');
    if (this.App.isLogin) this.createModules();
    else this.createPopUpModule();
  }

  createModules() {
    this.statisticBlock = new Statistic();
    this.gameBlock = new Game();
    this.currentGameBlock = new CurrentGame();

    this.container.append(this.statisticBlock.container,
      this.gameBlock.container,
      this.currentGameBlock.container);
  }

  createPopUpModule() {
    const popUp = new ElementBuilder('div', 'popup');
    const h2 = new ElementBuilder('h2', '');
    h2.element.innerHTML = '<b>Please, <a href="https://github.com/login/oauth/authorize?client_id=b04b335d696a08b29eb3">login</a></b><b>to play</b>';
    popUp.append(h2);
    this.container.append(popUp);
  }
}
