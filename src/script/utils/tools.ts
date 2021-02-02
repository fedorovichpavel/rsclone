import * as Phaser from 'phaser';
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin';
// @ts-ignore
import Preload from '../appliation/games/Preload.ts';
// @ts-ignore
import MainMenu from '../appliation/games/menu/MainMenu.ts';
// @ts-ignore
import Race from '../appliation/games/race/Race.ts';
// @ts-ignore
import Tetris from '../appliation/games/tetris/tetris.ts';
// @ts-ignore
import Breakout from '../appliation/games/breakout/breakout.ts';
// @ts-ignore
import SpaceAttack from '../appliation/games/space-attack/space-attack.ts';
// @ts-ignore
import FlappyBird from '../appliation/games/flappy-bird/flappy-bird.ts';
// @ts-ignore
import Snake from '../appliation/games/snake/snake.ts';
// @ts-ignore
import Snow from '../appliation/games/snow/snow.ts';
// @ts-ignore
import GameOver from '../appliation/games/GameOver.ts';
// @ts-ignore
import PauseMenu from '../appliation/games/menu/PauseMenu.ts';

export const URL = 'https://score-api2020q3.herokuapp.com';
export const COLOR = ['rgb(241,99,33)', 'rgb(255,228,32)', 'rgb(0,255,21)', 'rgb(0,60,255)', 'rgb(255,0,0)', 'rgb(199,33,241)'];
export const CONFIG = {
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
  scene: [
    Preload,
    MainMenu,
    Race,
    Tetris,
    Breakout,
    SpaceAttack,
    FlappyBird,
    Snake,
    Snow,
    GameOver,
    PauseMenu,
  ],
};
export const STATISTIC_HEADER = ['#', 'Github', 'Total Score', 'Race', 'Tetris', 'Breakout', 'Space Attack', 'Flappy Bird', 'Snake', 'Snow'];
