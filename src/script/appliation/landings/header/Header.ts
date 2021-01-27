// @ts-ignore
import Login from './Login.ts';
// @ts-ignore
import Logo from './Logo.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import App from '../../App.ts';

export default class Header {
  logo: Logo

  loginBlock: Login

  public container: ElementBuilder;

  private App: App;

  constructor() {
    this.App = new App();
    this.container = new ElementBuilder('header', 'header');
    this.logo = new Logo();
    this.container.append(this.logo.container);
    this.loginBlock = new Login(this.App.isLogin);
    this.container.append(this.loginBlock.container);
  }
}
