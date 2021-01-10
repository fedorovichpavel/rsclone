import * as Phaser from 'phaser';
// @ts-ignore
import Memory from './Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#000000',
  fontSize: '39px',
};

export default class GameOver extends Phaser.Scene {
  private Memory: Memory;

  private title: Phaser.GameObjects.Text;

  private config: {
    height: number;
    width: number;
  };

  constructor() {
    super('GameOver');
    this.Memory = new Memory();
    this.config = this.Memory.getConfig();
  }

  create() {
    this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    this.title = this.add.text(0, 150, 'Game Over', style);
    this.title.x = (this.config.width - this.title.width) / 2;
  }
}
