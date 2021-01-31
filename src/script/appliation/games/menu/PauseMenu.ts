import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';
// @ts-ignore
import CustomButton from '../buttons/CustomButton.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#fff',
  fontSize: '39px',
};

export default class PauseMenu extends Phaser.Scene {
  private title: Phaser.GameObjects.Text;

  private Memory: Memory;

  private config: { type: number;
                    physics: { default: string };
                    width: number;
                    height: number;
                    parent: string;
                    scene: any[] };

  constructor() {
    super('PauseMenu');
    this.Memory = new Memory();
    this.config = this.Memory.getConfig();
  }

  create() {
    this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    this.title = this.add.text(0, 110, 'Pause', style);
    this.title.setStroke('#000', 0.7);
    this.title.x = (this.config.width - this.title.width) / 2;

    const btnReturnGame = new CustomButton(this, 110, 200, 'Return');
    const btnRestart = new CustomButton(this, 110, 240, 'Restart');

    this.add.existing(btnReturnGame);
    this.add.existing(btnRestart);

    btnReturnGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.resume(this.Memory.getPrevGame());
        this.scene.stop();
      });

    btnRestart.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.scene.start(this.Memory.getPrevGame());
      this.scene.stop();
    });
  }
}
