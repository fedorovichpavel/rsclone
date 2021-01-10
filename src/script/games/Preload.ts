import * as Phaser from 'phaser';

const defaultScreen = require('../../assets/image/screen.png');
const road = require('../../assets/image/road.png');
const car = require('../../assets/image/car.png');
const carPlayer = require('../../assets/image/carPlayer.png');
const restartBtnNoActive = require('../../assets/image/restartBtnNoActive.png');
const restartBtnActive = require('../../assets/image/restartBtnActive.png');
const menuBtnNoActive = require('../../assets/image/menuBtnNoActive.png');
const menuBtnActive = require('../../assets/image/menuBtnActive.png');

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('defaultScreen', defaultScreen);
    this.load.image('background', road);
    this.load.image('car', car);
    this.load.image('carPlayer', carPlayer);
    this.load.image('carPlayer', restartBtnNoActive);
    this.load.image('carPlayer', restartBtnActive);
    this.load.image('carPlayer', menuBtnNoActive);
    this.load.image('carPlayer', menuBtnActive);
  }

  create() {
    this.scene.launch('RaceGame');
  }
}
