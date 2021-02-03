// @ts-ignore
import App from '../../App.ts';
// @ts-ignore
import ElementBuilder from '../../../utils/ElementBuilder.ts';
// @ts-ignore
import Memory from '../../games/Memory.ts';
// @ts-ignore
import UserDto from '../../games/dto/UserDto.ts';

export default class Login {
  private App: App;

  private code: string;

  public container: ElementBuilder;

  constructor(isLogin: boolean) {
    this.container = new ElementBuilder('div', 'header__login blocks');
    if (isLogin) {
      this.App = new App();
      this.code = this.App.codeLogin();
      this.App.api.auth(this.code).then((response) => {
        this.createUserBar(response);
        document.body.classList.add('loaded');
      });
    } else {
      this.createLoginBar();
    }
  }

  createLoginBar() {
    const a = new ElementBuilder('a', '', ['href', 'https://github.com/login/oauth/authorize?client_id=b04b335d696a08b29eb3']);
    a.element.text = 'LOGIN';
    this.container.append(a);
  }

  // eslint-disable-next-line class-methods-use-this
  createUserBar(user) {
    const memory = new Memory();
    const saveUser = new UserDto(user.avatar, user.breakout, user.flappyBird,
      user.login, user.node_id, user.race, user.snake,
      user.snow, user.spaceAttack, user.tetris, user.url);
    memory.setUser(saveUser);

    const img = new ElementBuilder('img', 'avtar', ['src', memory.user.avatar]);
    const a = new ElementBuilder('a', 'name', ['href', memory.user.url]);
    a.element.text = memory.user.login;
    const signOutBtn = new ElementBuilder('button', 'signbtn');
    signOutBtn.element.innerHTML = 'Sign Out';
    signOutBtn.on('click', () => {
      window.location.href = 'https://mikhail-hursky.github.io/rsclone/dist/';
    });
    this.container.append(img, a, signOutBtn);
  }
}
