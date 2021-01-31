import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#000000',
  fontSize: '18px',
};

export default class Breakout extends Phaser.Scene {
  private Memory:Memory;

  private ship: Phaser.Physics.Arcade.Image;

  private speed: number;

  private border: Phaser.GameObjects.Sprite;

  private bullets: Phaser.GameObjects.Group;

  private bricks: Phaser.GameObjects.Group;

  private map: Phaser.GameObjects.TileSprite;

  private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private shotSound: Phaser.Sound.BaseSound;

  private pauseBtn: any;

  constructor() {
    super('spaceAttack');
    this.Memory = new Memory();
  }

  create() {
    this.map = this.add.tileSprite(0, 0, 220, 460, 'space').setOrigin(0, 0);
    this.border = this.physics.add.sprite(0, 459, 'line').setOrigin(0, 0);
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.ship = this.physics.add.image(110, 440, 'ship').setImmovable();
    this.shotSound = this.sound.add('boom');
    this.score = 0;
    this.tableScore = this.add.text(22, 0, `Score:${this.score}`, style);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.speed = Phaser.Math.GetSpeed(300, 1);
    this.bullets = this.physics.add.group();
    this.bricks = this.physics.add.group();
    this.speed = 5;
    // eslint-disable-next-line
    this.physics.add.collider(this.bullets.getChildren(), this.bricks.getChildren(), this.hitBrick, null, this);
    this.physics.add.collider(this.bricks, this.border, this.gameOver, null, this);
    this.time.addEvent({
      delay: 300,
      callback: this.bricksGen,
      callbackScope: this,
      loop: true,
    });

    this.input.on('pointermove', function pMove(pointer) {
      this.ship.x = Phaser.Math.Clamp(pointer.x, 10, 210);
    }, this);

    this.pauseBtn = this.add.sprite(180, 5, 'pauseBtn').setOrigin(0, 0);
    this.pauseBtn.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.pauseGame();
      });
    this.input.keyboard.on('keydown-P', () => {
      this.pauseGame();
    });
  }

  update() {
    this.tableScore.text = `Score:${this.score}`;
    this.move();
    this.bulletStrike();
    this.checkLevel();

    if (this.input.activePointer.isDown) {
      if (this.bullets.children.entries.length < 8) {
        this.bulletGen();
      }
    }
  }

  addText(stage) {
    const text = this.add.text(40, 200, `Stage ${stage}`,
      {
        fontFamily: 'Pixel',
        color: '#000000',
        fontSize: '39px',
      });
    setTimeout(() => text.destroy(), 2500);
  }

  checkLevel() {
    if (this.score === 450) {
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.scene.pause();
      this.score += 1;
      this.ship.y -= 30;
      this.addText(10);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 400) {
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.scene.pause();
      this.score += 1;
      this.ship.y -= 30;
      this.addText(9);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 350) {
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.scene.pause();
      this.score += 1;
      this.ship.y -= 30;
      this.addText(8);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 300) {
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.scene.pause();
      this.score += 1;
      this.ship.y -= 30;
      this.addText(7);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 250) {
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.scene.pause();
      this.score += 1;
      this.ship.y -= 30;
      this.addText(6);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 200) {
      this.scene.pause();
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.score += 1;
      this.ship.y -= 30;
      this.addText(5);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 150) {
      this.scene.pause();
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.score += 1;
      this.ship.y -= 30;
      this.addText(4);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 100) {
      this.scene.pause();
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.score += 1;
      this.ship.y -= 30;
      this.addText(3);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    } else if (this.score === 50) {
      this.scene.pause();
      this.bricks.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.bullets.getChildren().forEach((e:Phaser.GameObjects.GameObject) => e.destroy());
      this.score += 1;
      this.ship.y -= 30;
      this.addText(2);
      setTimeout(() => {
        this.scene.resume();
      }, 3000);
    }
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('spaceAttack');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 500);
  }

  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 1;
  }

  bulletStrike() {
    this.bullets.getChildren().forEach((e:Phaser.GameObjects.Sprite) => { e.y -= 15; });
    this.bullets.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
      if (e.y < 0) {
        e.destroy();
      }
    });
  }

  bulletGen() {
    const xCoord = this.ship.x;
    const yCoord = this.ship.y;
    this.bullets.create(xCoord, yCoord - 20, 'ball').setScale(0.5);
    this.shotSound.play();
  }

  bricksGen() {
    const xCoord = Math.random() * 210 + 10;

    this.bricks.create(xCoord, -20, 'covid').setGravityY(200).setScale(1.1);
  }

  move() {
    if (this.cursors.left.isDown) {
      if (this.ship.x !== 10) {
        this.ship.x -= this.speed;
      }
    } else if (this.cursors.right.isDown) {
      if (this.ship.x !== 210) {
        this.ship.x += this.speed;
      }
    }

    if (this.cursors.space.isDown) {
      if (this.bullets.children.entries.length < 8) {
        this.bulletGen();
      }
    }
  }

  pauseGame() {
    this.Memory.setPrevGame('spaceAttack');
    this.scene.pause();
    this.scene.launch('PauseMenu');
  }
}
