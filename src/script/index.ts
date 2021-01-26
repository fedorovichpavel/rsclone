import '../styles/style.scss';
import * as Phaser from 'phaser';
// @ts-ignore
// eslint-disable-next-line import/extensions
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';
import './script.ts';
import './hovers.ts';
// @ts-ignore
import Race from './appliation/games/race/Race.ts';
// @ts-ignore
import Tetris from './appliation/games/tetris/tetris.ts';
// @ts-ignore
import Snake from './appliation/games/snake/snake.ts';
// @ts-ignore
import Breakout from './appliation/games/breakout/breakout.ts';
// @ts-ignore
import SpaceAttack from './appliation/games/space-attack/space-attack.ts';
// @ts-ignore
import FlappyBird from './appliation/games/flappy-bird/flappy-bird.ts';
// @ts-ignore
import Preload from './appliation/games/Preload.ts';
// @ts-ignore
import GameOver from './appliation/games/GameOver.ts';
// @ts-ignore
import Memory from './appliation/games/Memory.ts';
// @ts-ignore
import MainMenu from './appliation/games/menu/MainMenu.ts';
// @ts-ignore
import UserApi from './appliation/games/Api/UserApi.ts';
// @ts-ignore
import App from './appliation/App.ts';
// eslint-disable-next-line import/extensions

const config = {
  type: Phaser.WEBGL,
  physics: {
    default: 'arcade',
    /* arcade: {
      debug: true,
    }, */
  },
  audio: {
    disableWebAudio: true,
  },
  plugins: {
    scene: [{
      key: 'rexGestures',
      plugin: GesturesPlugin,
      mapping: 'rexGestures',
    }],
  },
  width: 220,
  height: 460,
  parent: 'game',
  scene: [Preload, MainMenu, Race, Tetris, Breakout, SpaceAttack, FlappyBird, Snake, GameOver],
};

const memory = new Memory();
memory.setConfig(config);

async function getUrlVars() {
  const vars = {
    code: undefined,
  };
  // @ts-ignore
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  if (vars.code) {
    const oauth = new UserApi();
    const clientSecret = '141ab6f4890e2cad7e08a62694ef96f9f51a9317';
    const clientId = 'b04b335d696a08b29eb3';
    const res = await oauth.auth(clientId, clientSecret, vars.code);
    // eslint-disable-next-line no-empty
    if (!res.status) {
      // eslint-disable-next-line no-new
      new Phaser.Game(config);
      const popup:HTMLInputElement = document.querySelector('.popup');
      popup.style.opacity = '0';
      // eslint-disable-next-line no-return-assign
      setTimeout(() => popup.style.display = 'none', 1000);
    }
  }
}
getUrlVars();
export default new App();
