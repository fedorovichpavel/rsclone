import '../styles/style.scss';
import * as Phaser from 'phaser';
// @ts-ignore
import Race from './games/race/Race.ts';
// @ts-ignore
import MainMenu from './games/menu/MainMenu.ts';
// @ts-ignore
import Preload from './games/Preload.ts';
// @ts-ignore
import GameOver from './games/GameOver.ts';
import Memory from "./games/Memory";

const config = {
  type: Phaser.WEBGL,
  physics: {
    default: 'arcade',
  },
  width: 220,
  height: 460,
  parent: 'game',
  scene: [Preload, Race, GameOver],
};

const memory = new Memory();
memory.setConfig(config);
// eslint-disable-next-line no-new
new Phaser.Game(config);
