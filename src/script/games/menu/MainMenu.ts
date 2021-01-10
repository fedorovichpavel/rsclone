import * as Phaser from 'phaser';

const defaultScreen = require('../../../assets/image/screen.png');

export default class MainmMenu extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite;

  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.image('defaultScreen', defaultScreen);
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    
  }
}
