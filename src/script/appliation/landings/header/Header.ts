import Login from './Login';
import Logo from './Logo';

export default class Header {
  logo: Logo

  loginBlock: Login

  constructor() {
    this.logo = new Logo();
    this.loginBlock = new Login(false);
  }
}
