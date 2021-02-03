import * as Phaser from 'phaser';
// @ts-ignore
import Memory from './Memory.ts';
// @ts-ignore
import CustomButton from './buttons/CustomButton.ts';
// @ts-ignore
import App from '../App.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#fff',
  fontSize: '39px',
};
const style2 = {
  fontFamily: 'Pixel',
  color: '#fff',
  fontSize: '25px',
  align: 'center',
};

export default class GameOver extends Phaser.Scene {
  private Memory: Memory;

  private title: Phaser.GameObjects.Text;

  private scoreTitle: Phaser.GameObjects.Text;

  private overSound: Phaser.Sound.BaseSound;

  private config: { type: number,
                    physics: {default: string},
                    width: number,
                    height: number,
                    parent: string,
                    scene: any[]};

  private App: App;

  constructor() {
    super('GameOver');
    this.Memory = new Memory();
    this.App = new App();
    this.config = this.Memory.getConfig();
  }

  create() {
    this.updateScore();
    this.overSound = this.sound.add('gameovermp3');
    this.overSound.play();
    this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    this.title = this.add.text(0, 110, 'Game Over', style);
    this.title.setStroke('#000', 0.7);
    this.title.x = (this.config.width - this.title.width) / 2;
    this.scoreTitle = this.add.text(0, 150, `Your score: \n${this.Memory.getScorePoint()}`, style2);
    this.scoreTitle.setStroke('#000', 0.7);
    this.scoreTitle.x = (this.config.width - this.scoreTitle.width) / 2;

    const btnRestart = new CustomButton(this, 110, 240, 'Restart');
    const btnReturnMenu = new CustomButton(this, 110, 280, 'Menu');

    this.add.existing(btnRestart);
    this.add.existing(btnReturnMenu);

    btnRestart.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start(this.Memory.getPrevGame());
      });

    btnReturnMenu.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('MainMenu');
      });
  }

  private updateScore() {
    if (this.Memory.user[this.Memory.getPrevGame()] < this.Memory.getScorePoint()) {
      this.Memory.user[this.Memory.getPrevGame()] = this.Memory.getScorePoint();
      this.Memory.user.updateTotalScore();
      this.App.api.setScoreUser(this.Memory.user).then(() => {
        this.App.main.statisticBlock.createStatisticUsers();
      });
    }
  }
}
