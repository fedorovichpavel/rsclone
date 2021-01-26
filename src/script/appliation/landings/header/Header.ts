// @ts-ignore
import Login from './Login.ts';
// @ts-ignore
import Logo from './Logo.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';

export default class Header {
  logo: Logo

  loginBlock: Login

  public container: ElementBuilder;

  constructor() {
    this.container = new ElementBuilder('div', null);
    this.logo = new Logo();
    this.container.append(this.logo.container);
    this.loginBlock = new Login(false);
    this.container.appendToBody();
  }
}
