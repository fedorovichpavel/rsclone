import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';
// @ts-ignore
import CustomButton from '../buttons/CustomButton.ts';

export default class MainMenu extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite;

  private text: Phaser.GameObjects.Text;

  private Memory: Memory;

  constructor() {
    super('MainMenu');
    this.Memory = new Memory();
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    this.text = this.add.text(0, 45, 'TETRIS',
      {
        fontFamily: 'Pixel',
        color: '#000000',
        fontSize: '39px',
      });
    this.text.x = (this.Memory.getConfig().width - this.text.width) / 2;

    const btnRaceGame = new CustomButton(this, 110, 105, 'Race game');
    this.add.existing(btnRaceGame);

    btnRaceGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('RaceGame');
      });

    const btnTetrisGame = new CustomButton(this, 110, 145, 'Tetris game');
    this.add.existing(btnTetrisGame);
    btnTetrisGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('tetris');
      });

    const btnBreakoutGame = new CustomButton(this, 110, 185, 'Breakout game');
    this.add.existing(btnBreakoutGame);
    btnBreakoutGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('breakout');
      });

    const btnspaceAttackGame = new CustomButton(this, 110, 225, 'Space attack');
    this.add.existing(btnspaceAttackGame);
    btnspaceAttackGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('spaceAttack');
      });

    const btnFlappyGame = new CustomButton(this, 110, 265, 'Flappy bird');
    this.add.existing(btnFlappyGame);
    btnFlappyGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('flappyBird');
      });
    
        const btnSnakeGame = new CustomButton(this, 110, 305, 'Snake game');
    this.add.existing(btnSnakeGame);

    btnSnakeGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('SnakeGame');
      });
  }
}
