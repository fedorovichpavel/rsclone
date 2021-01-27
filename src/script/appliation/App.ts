// @ts-ignore
import * as Phaser from 'phaser';
// @ts-ignore
import Header from './landings/header/Header.ts';
// @ts-ignore
import ElementBuilder from '../utils/ElementBuilder.ts';
// @ts-ignore
import Api from './Api/Api.ts';
// @ts-ignore
import Main from './landings/main/Main.ts';
// @ts-ignore
import { CONFIG } from '../utils/tools.ts';

export default class App {
  private static instance: App;

  private static exists: boolean;

  public header: Header;

  public isLogin: boolean;

  private container: ElementBuilder;

  public api: Api;

  private main: Main;

  constructor() {
    if (App.exists) return App.instance;
    App.instance = this;
    App.exists = true;
    this.init();
  }

  init() {
    if (this.codeLogin()) this.isLogin = true;
    else this.isLogin = false;
    this.api = new Api();
    this.header = new Header();
    this.main = new Main();
    this.container = new ElementBuilder('div', 'wrapper');
    this.container.append(this.header.container, this.main.container);
    this.container.appendToBody();
    if (this.isLogin) {
      new Phaser.Game(CONFIG);
    }
  }

  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this
  codeLogin(): string {
    const link = {
      code: undefined,
    };
    // @ts-ignore
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      link[key] = value;
    });
    return link.code;
  }
}
