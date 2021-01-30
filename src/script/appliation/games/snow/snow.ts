import * as Phaser from 'phaser';
// eslint-disable-next-line
import { Swipe } from 'phaser3-rex-plugins/plugins/gestures.js';
// @ts-ignore
import Memory from '../Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#FFF',
  fontSize: '18px',
};

export default class Snow extends Phaser.Scene {
  private gameWidth: number;

  private gameHeight: number;

  private boardSize: number;

  private boardSizeX: number;

  private boardSizeY: number;

  private cellSize: number;

  private snowman: any;

  private snowballs: any;

  private countSnowballs: number;

  private platforms: Phaser.GameObjects.Group;

  private bombs: Phaser.GameObjects.Group;

  private countBombs: number;

  private score: number;

  private health: number;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private tableScore: Phaser.GameObjects.Text;

  private tableHealth: Phaser.GameObjects.Text;

  private Memory: Memory;

  private swipe: Swipe;

  private snowSound: Phaser.Sound.BaseSound;

  private bombSound: Phaser.Sound.BaseSound;

  constructor() {
    super({
      key: 'SnowGame',
    });
    this.Memory = new Memory();
  }

  create() {
    this.boardSize = 20;
    this.boardSizeX = 11;
    this.boardSizeY = 23;
    this.cellSize = 20;
    this.gameHeight = this.cellSize * this.boardSizeY;
    this.gameWidth = this.cellSize * this.boardSizeX;
    this.countSnowballs = 2;
    this.countBombs = 3;

    this.add.tileSprite(
      this.gameWidth / 2,
      this.gameHeight / 2,
      this.gameWidth,
      this.gameHeight,
      'snowground',
    );

    this.createSnowman();

    this.createPlatform();

    this.createSnowballs(this.countSnowballs);

    this.createBombs(this.countBombs);

    this.physics.add.collider(this.snowman, this.platforms);

    this.snowSound = this.sound.add('snow');
    this.bombSound = this.sound.add('boombom');

    this.cursors = this.input.keyboard.createCursorKeys();

    this.score = 0;
    this.tableScore = this.add.text(22, 0, `Score: ${this.score}`, style);

    this.health = 1;
    this.tableHealth = this.add.text(22, 20, `Health: ${this.health}`, style);
  }

  createSnowman() {
    this.snowman = this.physics.add.sprite(20, 420, 'snowman').setOrigin(0, 0);
    this.snowman.setBounce(0.2);
    this.snowman.setCollideWorldBounds(true);
    this.snowman.body.setGravityY(1300);
  }

  createPlatform() {
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(0, 200, 'tree');
    this.platforms.create(160, 300, 'tree');
    this.platforms.create(110, 100, 'tree');
  }

  getXY() {
    const bool = Math.round(Math.random());
    let itemX;
    let itemY;
    if (bool === 0) { itemX = Math.random() * 100 * this.boardSize; itemY = 0; }
    if (bool === 1) { itemY = Math.random() * 100 * this.boardSize; itemX = 0; }
    return [
      itemX,
      itemY,
    ];
  }

  createSnowballs(count) {
    const [itemX, itemY] = this.getXY();
    this.snowballs = this.physics.add.group({
      key: 'snowball',
      repeat: count,
      setXY: { x: itemX, y: itemY, stepX: 50 },
    });

    this.snowballs.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      child.setBounce(1);
      child.setCollideWorldBounds(true);
      child.setVelocity(Phaser.Math.Between(-200, 200), 100);
    });

    this.physics.add.collider(this.snowballs, this.platforms);
    this.physics.add.overlap(this.snowman, this.snowballs, this.collectSnowballs, null, this);
  }

  createBombs(count) {
    const [itemX, itemY] = this.getXY();
    for (let i = 0; i < count; i += 1) {
      this.bombs = this.physics.add.group();
      this.physics.add.collider(this.bombs, this.platforms);
      this.physics.add.collider(this.snowman, this.bombs, this.hitBomb, null, this);

      // const x = (this.snowman.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      const bomb = this.bombs.create(itemX, itemY, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  update() {
    this.tableScore.text = `Score:${this.score}`;
    this.tableHealth.text = `Health: ${this.health}`;

    if (this.health <= 0) {
      this.physics.pause();
      this.snowman.setTint(0xff0000);
      this.gameOver();
    }

    this.moveSnowman();
    this.exitGame();
  }

  hitBomb(player, bomb) {
    this.bombSound.play();
    this.health -= 5;
    bomb.disableBody(true, true);
    const number = 1;
    this.createBombs(number);
  }

  collectSnowballs(player, snowball) {
    this.snowSound.play();
    this.score += 1;
    this.health += 1;
    snowball.disableBody(true, true);
    const number = 0;
    this.createSnowballs(number);
  }

  moveSnowman() {
    if (this.cursors.left.isDown) {
      this.snowman.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      this.snowman.setVelocityX(160);
    } else if (this.cursors.up.isDown) {
      this.snowman.setVelocityY(-160);
    } else if (this.cursors.down.isDown) {
      this.snowman.setVelocityY(160);
    } else {
      this.snowman.setVelocityX(0);
      this.snowman.setVelocityY(0);
    }
    if (this.cursors.up.isDown && this.snowman.body.touching.down) {
      this.snowman.setVelocityY(-330);
    }
  }

  exitGame() {
    if (this.cursors.space.isDown) {
      this.gameOver();
    }
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('SnowGame');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 1000);
  }
}
