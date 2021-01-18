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

import { settings } from './settingssnake';

export default class Snake extends Phaser.Scene {
  private delay: number;

  private mice: any;

  private flowers: any;

  private offsets: any;

  private snake: Array<MySnake>;

  private direction: string;

  private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private Memory: Memory;

  private swipe: Swipe;

    constructor() {
        super({
          key: "SnakeGame"
        });
        this.Memory = new Memory();
    }

    create() {
        this.mice = [];
        this.flowers = [];
        this.delay = settings.delay;
        this.offsets = {
            up: {x: 0, y: -1},
            down: {x: 0, y: 1},
            left: {x: -1, y: 0},
            right: {x: 1, y: 0},
        };
        this.direction = 'right';

        this.add.tileSprite(
              settings.gameWidth / 2,
              settings.gameHeight / 2,
              settings.gameWidth,
              settings.gameHeight,
              'ground');

        this.snake = [
            {x: 0, y: 0, name: 'tail', direction: 'right', sprite: undefined},
            {x: 1, y: 0, name: 'body', direction: 'right', sprite: undefined},
            {x: 2, y: 0, name: 'head', direction: 'right', sprite: undefined},
        ];
        this.snake.forEach((item, index) => {
            let [worldX, worldY] = this.cellToWorld(item.x, item.y);
            item.sprite = this.add.sprite(worldX, worldY, item.name);
        });


        this.createMice();

        let i = 0;
        while(this.flowers.length < settings.numberFlowers) {
            i++;
            this.createFlowers();
        }

        this.input.keyboard.on('keydown', this.handleKey, this);

        this.score = 0;
        this.tableScore = this.add.text(22, 0, `Score: ${this.score}`, style);
    }

    createFlowers() {
        let created = false;
        do {
            let x = Math.floor(Math.random() * settings.boardSizeX),
                y = Math.floor(Math.random() * settings.boardSizeY);

            if (!this.mice.some(f => f.x == x && f.y == y)
                && !this.flowers.some(s => s.x == x && s.y == y)
                && !this.snake.some(s => s.x == x && s.y == y)) {

                created = true;

                let [worldX, worldY] = this.cellToWorld(x, y);
                this.flowers.push({
                    x, y,
                    sprite: this.add.sprite(worldX, worldY, 'flower'),
                })
            }
        } while(!created);
    }

    update(time, delta) {
        this.tableScore.text = `Score:${this.score}`;
        this.delay -= delta;

        if (this.delay <= 0) {
            this.delay = settings.delay - this.delay;

            let first = this.snake[this.snake.length - 1];
            first.name = 'body';
            first.sprite.setTexture(first.name);

            let x = this.convertX(first.x + this.offsets[this.direction].x);
            let y = this.convertY(first.y + this.offsets[this.direction].y);

            if (this.snake.some(s => s.x == x && s.y == y)) {
                this.gameOver();
                return;
            }

            if (this.flowers.some(s => s.x == x && s.y == y)) {
                this.gameOver();
                return;
            }

            let [worldX, worldY] = this.cellToWorld(x, y);

            const angles = {
                'up': -90,
                'down': 90,
                'right': 0,
                'left': 180,
            };

            let head = {
                x, y,
                name: 'head',
                direction: this.direction,
                sprite: undefined,
            };
            head.sprite = this.add.sprite(worldX, worldY, head.name);
            head.sprite.angle = angles[this.direction];
            this.snake.push(head);

            let eaten = this.mice.filter(f => f.x == head.x && f.y == head.y);

            if (eaten.length > 0) {
                console.log('eat mouse!');
                this.score += 1;
                this.mice = this.mice.filter(f => f.x != head.x || f.y != head.y);
                eaten.forEach(f => {
                    f.sprite.destroy();
                });

            }
            else {
                let drop = this.snake.shift();
                drop.sprite.destroy();
                let last = this.snake[0];
                last.name = 'tail';
                last.sprite.setTexture(last.name);
            }
        }


        if (this.mice.length < settings.minFoodNumber) {
            this.createMice();
        }
    }

    convert(i) {
        return (settings.boardSize + Math.sign(i) * Math.abs(i)) % settings.boardSize;
    }

    convertX(i) {
        return (settings.boardSizeX + Math.sign(i) * Math.abs(i)) % settings.boardSizeX;
    }

    convertY(i) {
        return (settings.boardSizeY + Math.sign(i) * Math.abs(i)) % settings.boardSizeY;
    }


    createMice() {
        while (this.mice.length < settings.maxFoodNumber) {

            let x = Math.floor(Math.random() * settings.boardSizeX),
                y = Math.floor(Math.random() * settings.boardSizeY);

            if (!this.mice.some(f => f.x == x && f.y == y) && !this.snake.some(s => s.x == x && s.y == y)) {
                let [foodX, foodY] = this.cellToWorld(x, y);
                this.mice.push({
                    x, y,
                    sprite: this.add.sprite(foodX, foodY, 'mouse'),
                })
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
        this.snake.forEach(s => {
            s.direction = inverse[s.direction];
        });
        this.direction = this.snake[this.snake.length - 1].direction;
    }

    handleKey(e) {
        switch (e.code) {
            case 'ArrowLeft':
                if (this.direction == 'right') {
                    this.reverse();
                }
                else {
                    this.direction = 'left';
                }
                break;
            case 'ArrowRight':
                if (this.direction == 'left') {
                    this.reverse();
                }
                else {
                    this.direction = 'right';
                }
                break;
            case 'ArrowUp':
                if (this.direction == 'down') {
                    this.reverse();
                }
                else {
                    this.direction = 'up';
                }
                break;
            case 'ArrowDown':
                if (this.direction == 'up') {
                    this.reverse();
                }
                else {
                    this.direction = 'down';
                }
                break;
        }
    }

    cellToWorld(x, y) {
        return [
            x * settings.cellSize + settings.cellSize / 2,
            y * settings.cellSize + settings.cellSize / 2
        ];
    }

    gameOver() {
      this.scene.pause();
      this.Memory.setScorePoint(this.score);
      this.Memory.setPrevGame('SnakeGame');
      setTimeout(() => {
        this.scene.restart(this);
        this.scene.stop();
        this.scene.start('GameOver');
      }, 1000);
    }
}
