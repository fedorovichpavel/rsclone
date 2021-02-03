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

type MySnake = {
  x: number,
  y: number,
  name: string,
  direction: string,
  sprite: Phaser.GameObjects.Sprite,
}

export default class Snake extends Phaser.Scene {
  private gameWidth: number;

  private gameHeight: number;

  private boardSize: number;

  private boardSizeX: number;

  private boardSizeY: number;

  private cellSize: number;

  private speed: number;

  private delay: number;

  private mice: any;

  private flowers: any;

  private offsets: any;

  private snake: Array<MySnake>;

  private direction: string;

  private numberFlowers: number;

  private startMouseNumber: number;

  private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private Memory: Memory;

  private swipe: Swipe;

  private flowerSound: Phaser.Sound.BaseSound;

  private mouseSound: Phaser.Sound.BaseSound;

  private snakeSound: Phaser.Sound.BaseSound;

  private pauseBtn: any;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('snake');
    this.Memory = new Memory();
  }

  create() {
    this.boardSize = 20;
    this.boardSizeX = 11;
    this.boardSizeY = 23;
    this.cellSize = 20;
    this.gameHeight = this.cellSize * this.boardSizeY;
    this.gameWidth = this.cellSize * this.boardSizeX;
    this.speed = 350;

    this.mice = [];
    this.flowers = [];
    this.numberFlowers = 1;
    this.startMouseNumber = 1;
    this.delay = this.speed;
    this.offsets = {
      up: { x: 0, y: -1 },
      down: { x: 0, y: 1 },
      left: { x: -1, y: 0 },
      right: { x: 1, y: 0 },
    };
    this.direction = 'right';

    this.flowerSound = this.sound.add('join');
    this.mouseSound = this.sound.add('rotate');
    this.snakeSound = this.sound.add('rotate');

    this.swipe = new Swipe(this);

    this.add.tileSprite(
      this.gameWidth / 2,
      this.gameHeight / 2,
      this.gameWidth,
      this.gameHeight,
      'ground1',
    );

    this.snake = [
      {
        x: 0, y: 0, name: 'tail', direction: 'right', sprite: undefined,
      },
      {
        x: 1, y: 0, name: 'body', direction: 'right', sprite: undefined,
      },
      {
        x: 2, y: 0, name: 'head', direction: 'right', sprite: undefined,
      },
    ];
    this.snake.forEach((item) => {
      const [dataX, dataY] = this.getXY(item.x, item.y);
      const elem = item;
      elem.sprite = this.add.sprite(dataX, dataY, elem.name);
      return elem;
    });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.createMice();
    this.createFlowers();

    this.score = 0;
    this.tableScore = this.add.text(22, 0, `Score: ${this.score}`, style);

    this.pauseBtn = this.add.sprite(180, 5, 'pauseBtn').setOrigin(0, 0);
    this.pauseBtn.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.pauseGame();
      });
    this.input.keyboard.on('keydown-P', () => {
      this.pauseGame();
    });
  }

  update(time, delta) {
    this.tableScore.text = `Score:${this.score}`;
    this.delay -= delta;

    if (this.delay <= 0) {
      this.delay = this.speed - this.delay;

      const first = this.snake[this.snake.length - 1];
      first.name = 'body';
      first.sprite.setTexture(first.name);

      const x = this.convertX(first.x + this.offsets[this.direction].x);
      const y = this.convertY(first.y + this.offsets[this.direction].y);

      if (this.snake.some((s) => s.x === x && s.y === y)) {
        this.snakeSound.play();
        this.gameOver();
        return;
      }

      if (this.flowers.some((f) => f.x === x && f.y === y)) {
        this.flowerSound.play();
        this.gameOver();
        return;
      }

      const [dataX, dataY] = this.getXY(x, y);

      const angles = {
        up: -90,
        down: 90,
        right: 0,
        left: 180,
      };

      const head = {
        x,
        y,
        name: 'head',
        direction: this.direction,
        sprite: undefined,
      };
      head.sprite = this.add.sprite(dataX, dataY, head.name);
      head.sprite.angle = angles[this.direction];
      this.snake.push(head);

      const eaten = this.mice.filter((m) => m.x === head.x && m.y === head.y);

      if (eaten.length > 0) {
        this.mouseSound.play();
        this.score += 1;
        this.mice = this.mice.filter((m) => m.x !== head.x || m.y !== head.y);
        eaten.forEach((item) => {
          item.sprite.destroy();
        });
      } else {
        const drop = this.snake.shift();
        drop.sprite.destroy();
        const last = this.snake[0];
        last.name = 'tail';
        last.sprite.setTexture(last.name);
      }
    }

    this.moveSnake();

    this.levelUp();

    if (this.mice.length < this.startMouseNumber) {
      this.createMice();
    }
  }

  levelUp() {
    if (this.score === 3) {
      this.speed = 330;
    }
    if (this.score === 5) {
      this.startMouseNumber = 2;
    }
    if (this.score === 10) {
      this.numberFlowers = 2;
      while (this.flowers.length < this.numberFlowers) {
        this.createFlowers();
      }
    }
    if (this.score === 15) {
      this.speed = 300;
      this.startMouseNumber = 3;
      this.numberFlowers = 4;
      while (this.flowers.length < this.numberFlowers) {
        this.createFlowers();
      }
    }
    if (this.score === 20) {
      this.numberFlowers = 5;
      while (this.flowers.length < this.numberFlowers) {
        this.createFlowers();
      }
    }
    if (this.score === 25) {
      this.speed = 250;
    }
  }

  convertX(i) {
    return (this.boardSizeX + Math.sign(i) * Math.abs(i)) % this.boardSizeX;
  }

  convertY(i) {
    return (this.boardSizeY + Math.sign(i) * Math.abs(i)) % this.boardSizeY;
  }

  createFlowers() {
    let created = false;
    do {
      const x = Math.floor(Math.random() * this.boardSizeX);
      const y = Math.floor(Math.random() * this.boardSizeY);

      if (!this.mice.some((m) => m.x === x && m.y === y)
                && !this.flowers.some((f) => f.x === x && f.y === y)
                && !this.snake.some((s) => s.x === x && s.y === y)) {
        created = true;

        const [dataX, dataY] = this.getXY(x, y);
        this.flowers.push({
          x,
          y,
          sprite: this.add.sprite(dataX, dataY, 'flower'),
        });
      }
    } while (!created);
  }

  createMice() {
    while (this.mice.length < this.startMouseNumber) {
      const x = Math.floor(Math.random() * this.boardSizeX);
      const y = Math.floor(Math.random() * this.boardSizeY);

      if (!this.mice.some((m) => m.x === x && m.y === y)
          && !this.flowers.some((f) => f.x === x && f.y === y)
          && !this.snake.some((s) => s.x === x && s.y === y)) {
        const [dataX, dataY] = this.getXY(x, y);
        this.mice.push({
          x,
          y,
          sprite: this.add.sprite(dataX, dataY, 'mouse'),
        });
      }
    }
  }

  reverse() {
    const inverse = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left',
    };

    this.snake = this.snake.reverse();
    this.snake.forEach((s) => {
      const elem = s;
      elem.direction = inverse[elem.direction];
      return elem;
    });
    this.direction = this.snake[this.snake.length - 1].direction;
  }

  moveSnake() {
    if (this.cursors.right.isDown || this.swipe.right) {
      this.cursors.right.isDown = false;

      if (this.direction === 'left') {
        this.reverse();
      } else {
        this.direction = 'right';
      }
    }

    if (this.cursors.left.isDown || this.swipe.left) {
      this.cursors.left.isDown = false;

      if (this.direction === 'right') {
        this.reverse();
      } else {
        this.direction = 'left';
      }
    }

    if (this.cursors.up.isDown || this.swipe.up) {
      this.cursors.up.isDown = false;

      if (this.direction === 'down') {
        this.reverse();
      } else {
        this.direction = 'up';
      }
    }

    if (this.cursors.down.isDown || this.swipe.down) {
      this.cursors.down.isDown = false;

      if (this.direction === 'up') {
        this.reverse();
      } else {
        this.direction = 'down';
      }
    }
  }

  getXY(x, y) {
    return [
      x * this.cellSize + this.cellSize / 2,
      y * this.cellSize + this.cellSize / 2,
    ];
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('snake');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 1000);
  }

  private pauseGame() {
    this.Memory.setPrevGame('snake');
    this.scene.pause();
    this.scene.launch('PauseMenu');
  }
}
