import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';
// @ts-ignore
import CustomButton from '../buttons/CustomButton.ts';

export default class MainMenu extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite;

  private text: Phaser.GameObjects.Text;

  private Memory: Memory;

  private btnMute: Phaser.GameObjects.Image;

  constructor() {
    super('MainMenu');
    this.Memory = new Memory();
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 220, 460, 'defaultScreen').setOrigin(0, 0);
    this.text = this.add.text(0, 45, 'TETRIS',
      {
        fontFamily: 'Pixel',
        color: '#fff',
        fontSize: '39px',
      });
    this.text.setStroke('#000', 0.7);
    this.text.x = (this.Memory.getConfig().width - this.text.width) / 2;

    const btnRaceGame = new CustomButton(this, 110, 125, 'Race game');
    this.add.existing(btnRaceGame);

    btnRaceGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('race');
      });

    const btnTetrisGame = new CustomButton(this, 110, 165, 'Tetris game');
    this.add.existing(btnTetrisGame);
    btnTetrisGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('tetris');
      });

    const btnBreakoutGame = new CustomButton(this, 110, 205, 'Breakout game');
    this.add.existing(btnBreakoutGame);
    btnBreakoutGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('breakout');
      });

    const btnspaceAttackGame = new CustomButton(this, 110, 245, 'Space attack');
    this.add.existing(btnspaceAttackGame);
    btnspaceAttackGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('spaceAttack');
      });

    const btnFlappyGame = new CustomButton(this, 110, 285, 'Flappy bird');
    this.add.existing(btnFlappyGame);
    btnFlappyGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('flappyBird');
      });

    const btnSnakeGame = new CustomButton(this, 110, 325, 'Snake game');
    this.add.existing(btnSnakeGame);

    btnSnakeGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('snake');
      });

    const btnSnowGame = new CustomButton(this, 110, 365, 'Snow game');
    this.add.existing(btnSnowGame);

    btnSnowGame.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start('snow');
      });

    const btnFullScreen = this.add.image(200, 20, 'fullscreen', 0).setInteractive().setScale(0.2);
    btnFullScreen.on('pointerup', function clicks() {
      if (this.scale.isFullscreen) {
        btnFullScreen.setFrame(0);

        this.scale.stopFullscreen();
      } else {
        btnFullScreen.setFrame(1);

        this.scale.startFullscreen();
        document.querySelector('canvas').style.height = 'inherit'; document.querySelector('canvas').style.width = 'auto';
        const gameDiv:HTMLInputElement = document.querySelector('#game div');
        gameDiv.style.textAlign = 'center';
      }
    }, this);

    if (this.game.sound.mute) {
      this.btnMute = this.add.image(50, 420, 'muteon', 0).setInteractive().setScale(0.25);
    } else if (!this.game.sound.mute) {
      this.btnMute = this.add.image(50, 420, 'muteoff', 0).setInteractive().setScale(0.25);
    }
  }

  update() {
    this.btnMute.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.game.sound.mute = !this.game.sound.mute;
    }, this);
    if (this.game.sound.mute) {
      this.btnMute = this.add.image(50, 420, 'muteoff', 0).setInteractive().setScale(0.25);
    } else if (!this.game.sound.mute) {
      this.btnMute = this.add.image(50, 420, 'muteon', 0).setInteractive().setScale(0.25);
    }
  }
}
