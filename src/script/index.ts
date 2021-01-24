import '../styles/style.scss';
import * as Phaser from 'phaser';
// @ts-ignore
// eslint-disable-next-line import/extensions
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin.js';
import './script';
// @ts-ignore
import Race from './games/race/Race.ts';
// @ts-ignore
import Tetris from './games/tetris/tetris.ts';
// @ts-ignore
import Snake from './games/snake/snake.ts';
// @ts-ignore
import Breakout from './games/breakout/breakout.ts';
// @ts-ignore
import SpaceAttack from './games/space-attack/space-attack.ts';
// @ts-ignore
import FlappyBird from './games/flappy-bird/flappy-bird.ts';
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
export default new Phaser.Game(config);
