import 'phaser';
import road from '../assets/image/road.png';
import car from '../assets/image/car.png';

class Race extends Phaser.Scene {
  constructor() {
    super();
    this.speed = 4;
    this.movementPX = 60;
    this.arrEnemyCar = [];
  }

  preload() {
    this.load.image('background', road);
    this.load.image('car', car);
  }

  create() {
    this.road = this.add.tileSprite(0, 0, 220, 460, 'background').setOrigin(0, 0);
    this.tween = this.tweens.addCounter({
      from: 1,
      to: 2,
      duration: 5000,
      ease: 'Since.easeInOut',
      yoyo: true,
      repeat: -1,
    });
    this.car = this.physics.add.sprite(20, 380, 'car').setOrigin(0, 0);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.road.tilePositionY -= this.speed;
    this.moveCarLeftAndRight();
  }

  moveCarLeftAndRight() {
    if (this.cursors.right.isDown) {
      this.cursors.right.isDown = false;

      if (this.car.x !== 140) {
        this.car.x += this.movementPX;
      }
    }

    if (this.cursors.left.isDown) {
      this.cursors.left.isDown = false;

      if (this.car.x !== 20) {
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

    for (let i = 0; i < 3; i + 1) {
      y = -400 * (i + 1);
      x = this.px();
      this.arrEnemyCar[i] = this.physics.add.sprite(x, y, 'car').setOrigin(0, 0);
      this.arrEnemyCar[i].angle = 180;
    }
  }

  // eslint-disable-next-line consistent-return
  px() {
    // eslint-disable-next-line default-case
    switch (this.coinToss()) {
      case 0:
        return 20;
      case 1:
        return 80;
      case 2:
        return 140;
    }
  }

  moveEnemyCar() {
    for (let i = 0; i < 3; i + 1) {
      if (this.arrEnemyCar[i].y > 600) {
        this.arrEnemyCar[i].x = this.px();
        this.arrEnemyCar[i].y = -600;
      }
      this.arrEnemyCar[i].y += this.speed;
    }
  }
}

const config = {
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
  },
  width: 220,
  height: 460,
  backgroundColor: '#ababab',
  parent: 'game',
  scene: [Race],
};

const game = new Phaser.Game(config);
