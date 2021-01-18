import * as Phaser from 'phaser';

const defaultScreen = require('../../assets/image/screen.png');
const road = require('../../assets/image/road.png');
const car = require('../../assets/image/car.png');
const carPlayer = require('../../assets/image/carPlayer.png');
const btnNoActive = require('../../assets/image/btnNoActive.png');
const btnActive = require('../../assets/image/btnActive.png');
const map = require('../../assets/image/map.png');
const figure = require('../../assets/image/figure.png');
const line = require('../../assets/image/Line.png');
const line2 = require('../../assets/image/Line2.png');
const ball = require('../../assets/image/ball.png');
const paddle = require('../../assets/image/paddle.png');

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('defaultScreen', defaultScreen);
    this.load.image('background', road);
    this.load.image('car', car);
    this.load.image('carPlayer', carPlayer);
    this.load.image('btnNoActive', btnNoActive);
    this.load.image('btnActive', btnActive);
    this.load.image('backgroundTetris', map);
    this.load.image('figure', figure);
    this.load.image('line', line);
    this.load.image('line2', line2);
    this.load.image('ball', ball);
    this.load.image('paddle', paddle);
    // Ваши картинки все
    this.create();
  }

  create() {
    this.scene.launch('MainMenu');
  }
}
