import * as Phaser from 'phaser';

const defaultScreen = require('../../assets/image/screen.png');
const road = require('../../assets/image/road.png');
const car = require('../../assets/image/car.png');
const carPlayer = require('../../assets/image/carPlayer.png');
const btnNoActive = require('../../assets/image/btnNoActive.png');
const btnActive = require('../../assets/image/btnActive.png');

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

    // Ваши картинки все
    this.create();
  }

  create() {
    this.scene.launch('MainMenu');
  }
}
