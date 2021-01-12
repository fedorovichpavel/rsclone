import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#000000',
  fontSize: '18px',
};

export default class Race extends Phaser.Scene {
  private speed: number;

  private readonly movementPX: number;

  private arrEnemyCar: Array<Phaser.Types.Physics.Arcade.SpriteWithDynamicBody>;

  private road: Phaser.GameObjects.TileSprite;

  private car: Phaser.Physics.Arcade.Sprite & { body: Phaser.Physics.Arcade.Body };

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private prevCount: number;

  private score: number;

  private Memory: Memory;

  private tableScore: Phaser.GameObjects.Text;

  constructor() {
    super('RaceGame');
    this.Memory = new Memory();
    this.movementPX = 60;
  }

  create() {
    this.arrEnemyCar = [];
    this.score = 0;
    this.speed = 5;
    this.road = this.add.tileSprite(0, 0, 220, 460, 'background').setOrigin(0, 0);
    this.car = this.physics.add.sprite(21, 370, 'carPlayer').setOrigin(0, 0);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spawnEnemyCar();
    this.physics.add.collider(this.car, this.arrEnemyCar, () => this.gameOver());
    this.tableScore = this.add.text(22, 0, `Score:${this.score}`, style);
  }

  update() {
    this.road.tilePositionY -= this.speed;
    this.moveCarLeftAndRight();
    this.moveEnemyCar();
    this.updateSpeed();
    this.tableScore.text = `Score:${this.score}`;
  }

  moveCarLeftAndRight() {
    if (this.cursors.right.isDown) {
      this.cursors.right.isDown = false;

      if (this.car.x !== 141) {
        this.car.x += this.movementPX;
      }
    }

    if (this.cursors.left.isDown) {
      this.cursors.left.isDown = false;

      if (this.car.x !== 21) {
        this.car.x -= this.movementPX;
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  coinToss() {
    return Math.floor(Math.random() * 3);
  }

  spawnEnemyCar() {
    let x;
    let y;
    for (let i = 0; i < 5; i += 1) {
      y = -200 * (i + 1);
      x = this.px();
      this.arrEnemyCar.push(this.physics.add.sprite(x, y, 'car').setOrigin(0, 0));
    }
  }

  // eslint-disable-next-line consistent-return
  px() {
    let x = this.coinToss();

    if (x === this.prevCount) x += 1;
    if (x === 3) x -= Math.round(1 - 0.5 + Math.random() * (2 - 1 + 1));

    // eslint-disable-next-line default-case
    switch (x) {
      case 0:
        this.prevCount = 0;
        return 20;
      case 1:
        this.prevCount = 1;
        return 80;
      case 2:
        this.prevCount = 2;
        return 140;
    }
  }

  moveEnemyCar() {
    for (let i = 0; i < this.arrEnemyCar.length; i += 1) {
      if (this.arrEnemyCar[i].y > 560) {
        this.score += this.speed;
        this.arrEnemyCar[i].x = this.px();
        this.arrEnemyCar[i].y = -560;
      }
      this.arrEnemyCar[i].y += this.speed;
    }
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('RaceGame');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 500);
  }

  private updateSpeed() {
    // eslint-disable-next-line default-case
    switch (this.score) {
      case 150:
        this.score += 1;
        this.speed += 1;
        break;
      case 301:
        this.score += 1;
        this.speed += 1;
        break;
      case 449:
        this.score += 1;
        this.speed += 1;
        break;
      case 602:
        this.score += 1;
        this.speed += 1;
        break;
      case 756:
        this.score += 1;
        this.speed += 1;
        break;
      case 907:
        this.score += 1;
        this.speed += 1;
        break;
      case 1051:
        this.score += 1;
        this.speed += 1;
        break;
      case 1292:
        this.score += 1;
        this.speed += 1;
        break;
    }
  }
}
