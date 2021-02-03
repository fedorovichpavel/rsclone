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
// @ts-ignore
import Footer from './landings/footer/Footer.ts';
// @ts-ignore
import addAnimation from '../hovers.ts';

export default class App {
  private static instance: App;

  private static exists: boolean;

  public header: Header;

  public isLogin: boolean;

  private container: ElementBuilder;

  public api: Api;

  public main: Main;

  private code: string;

  private footer: Footer;

  constructor() {
    if (App.exists) return App.instance;
    App.instance = this;
    App.exists = true;
    this.container = new ElementBuilder('div', 'wrapper');
    this.init();
  }

  init() {
    this.code = this.codeLogin();
    this.howToStartAPage();
    this.api = new Api();
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    this.container.append(this.header.container, this.main.container, this.footer.container);
    this.container.appendToBody();
    addAnimation();
    if (this.isLogin) {
      // eslint-disable-next-line no-new
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

  howToStartAPage() {
    if (this.code) {
      if (localStorage.getItem('CODE_LOGIN') === this.code) {
        this.isLogin = false;
        window.location.href = 'https://mikhail-hursky.github.io/rsclone/dist/';
      } else {
        localStorage.setItem('CODE_LOGIN', this.code);
        this.isLogin = true;
      }
    } else {
      this.isLogin = false;
      document.body.classList.add('loaded');
    }
  }
}
