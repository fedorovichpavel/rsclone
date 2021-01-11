import '../styles/style.scss';
import * as Phaser from 'phaser';
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

const config = {
  type: Phaser.WEBGL,
  physics: {
    default: 'arcade',
  },
  width: 220,
  height: 460,
  parent: 'game',
  scene: [Preload, MainMenu, Race, GameOver],
};

const memory = new Memory();
memory.setConfig(config);
// eslint-disable-next-line no-new
new Phaser.Game(config);
