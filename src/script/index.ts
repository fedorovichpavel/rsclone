import '../styles/style.scss';
import * as Phaser from 'phaser';
// @ts-ignore
// eslint-disable-next-line import/extensions
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';
// @ts-ignore
import Race from './games/race/Race.ts';
// @ts-ignore
import Preload from './games/Preload.ts';
// @ts-ignore
import GameOver from './games/GameOver.ts';
// @ts-ignore
import Memory from './games/Memory.ts';
// @ts-ignore
import MainMenu from './games/menu/MainMenu.ts';
// eslint-disable-next-line import/extensions

const config = {
  type: Phaser.WEBGL,
  physics: {
    default: 'arcade',
    /* arcade: {
      debug: true,
    }, */
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
  scene: [Preload, MainMenu, Race, GameOver],
};

const memory = new Memory();
memory.setConfig(config);
export default new Phaser.Game(config);
