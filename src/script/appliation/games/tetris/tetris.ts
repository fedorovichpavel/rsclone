import * as Phaser from 'phaser';
// eslint-disable-next-line
import { Swipe } from 'phaser3-rex-plugins/plugins/gestures.js';
// @ts-ignore
import Memory from '../Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#000000',
  fontSize: '18px',
};

export default class Tetris extends Phaser.Scene {
  private speed: number;

  private map: Phaser.GameObjects.TileSprite;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private fig: Phaser.GameObjects.Group;

  private borderBottom: Phaser.GameObjects.Sprite;

  private borderLeft: Phaser.GameObjects.Sprite;

  private borderRight: Phaser.GameObjects.Sprite;

  private pauseBtn: Phaser.GameObjects.Image;

  private group: Phaser.GameObjects.Group;

  private YGroup: Array<number>;

  private checkRight: boolean;

  private checkLeft: boolean;

  private checkBottom: boolean;

  private numberFigure: number;

  private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private Memory: Memory;

  private swipe: Swipe;

  private color: any;

  private rotateSound: Phaser.Sound.BaseSound;

  private swipeSound: Phaser.Sound.BaseSound;

  private joinSound: Phaser.Sound.BaseSound;

  private brokenSound: Phaser.Sound.BaseSound;

  constructor() {
    super('tetris');
    this.speed = 1;
    this.Memory = new Memory();
  }

  randomFig() {
    const arr = [
      [],
      [
        [80, 20],
        [100, 20],
        [120, 20],
        [120, 0],
      ],
      [
        [60, 0],
        [80, 0],
        [100, 0],
        [120, 0],
      ],
      [
        [80, 20],
        [100, 0],
        [100, 20],
        [120, 20],
      ],
      [

        [80, 20],
        [100, 20],
        [120, 0],
        [120, 20],
      ],
      [

        [80, 20],
        [100, 0],
        [100, 20],
        [120, 0],
      ],
      [
        [100, 0],
        [100, 20],
        [120, 20],
        [120, 0],
      ],
      [
        [80, 0],
        [100, 20],
        [100, 0],
        [120, 20],
      ],
    ];
    const randomNum = Math.floor(Math.random() * (7 - 1) + 1);
    this.tint();
    this.fig = this.physics.add.group();
    this.fig.create(arr[randomNum][0][0] + 10, arr[randomNum][0][1] + 10, 'figure').setTint(this.color);
    this.fig.create(arr[randomNum][1][0] + 10, arr[randomNum][1][1] + 10, 'figure').setTint(this.color);
    this.fig.create(arr[randomNum][2][0] + 10, arr[randomNum][2][1] + 10, 'figure').setTint(this.color);
    this.fig.create(arr[randomNum][3][0] + 10, arr[randomNum][3][1] + 10, 'figure').setTint(this.color);
    this.numberFigure = randomNum;
  }

  create() {
    this.map = this.add.tileSprite(0, 0, 220, 460, 'backgroundTetris').setOrigin(0, 0);
    this.borderBottom = this.physics.add.sprite(0, 459, 'line').setOrigin(0, 0);
    this.borderLeft = this.physics.add.sprite(0, 0, 'line2').setOrigin(0, 0);
    this.borderRight = this.physics.add.sprite(219, 0, 'line2').setOrigin(0, 0);
    this.rotateSound = this.sound.add('rotate');
    this.swipeSound = this.sound.add('swipe');
    this.brokenSound = this.sound.add('broken');
    this.joinSound = this.sound.add('join');
    this.group = this.physics.add.group();
    // eslint-disable-next-line
    this.YGroup = [10, 30, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450];
    this.checkRight = true;
    this.swipe = new Swipe(this);
    this.checkLeft = true;
    this.checkBottom = true;
    this.score = 0;
    this.tableScore = this.add.text(22, 0, `Score:${this.score}`, style);
    this.numberFigure = 0;
    this.randomFig();
    this.color = Math.random() * 0xffffff;
    this.physics.add.existing(this.borderBottom);
    this.physics.add.existing(this.borderLeft);
    this.physics.add.existing(this.borderRight);
    this.tweens.addCounter({
      from: 1,
      to: 2,
      duration: 10000,
      ease: 'Since.easeInOut',
      yoyo: true,
      repeat: -1,
    });
    this.cursors = this.input.keyboard.createCursorKeys();

    this.pauseBtn = this.add.sprite(180, 5, 'pauseBtn').setOrigin(0, 0);
    this.pauseBtn.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.pauseGame();
      });
    this.input.keyboard.on('keydown-P', () => {
      this.pauseGame();
    });
  }

  tint() {
    this.color = Math.random() * 0xffffff;
  }

  update() {
    if (this.checkBottom) {
      this.fallComplete(this.fig);
    } else {
      this.checkLeft = true;
      this.checkRight = true;
    }
    this.fallFig();
    this.moveFig();
    this.tableScore.text = `Score:${this.score}`;
    this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
      this.group.getChildren().forEach((child:Phaser.GameObjects.Sprite) => {
        if (child.getBounds().contains(e.x, e.y + 10)) {
          this.speed = 1;
        }
        if (child.getBounds().contains(e.x, e.y + 20)) {
          this.speed = 1;
        }
      });
      if (e.y > 435) {
        this.speed = 1;
      }
    });

    this.group.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
      if (e.y === 10) {
        this.gameOver();
      }
    });
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('tetris');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 1000);
  }

  checkNeedDelet() {
    const checkDel = {};
    this.YGroup.forEach((coorY) => {
      checkDel[coorY] = [];
      this.group.getChildren().forEach((child:Phaser.GameObjects.Sprite) => {
        for (let i = 10; i <= 210; i += 20) {
          if (child.getBounds().contains(i, coorY)) {
            checkDel[coorY].push(child);
          }
        }
      });
      if (checkDel[coorY].length === 11) {
        checkDel[coorY].forEach((e) => e.destroy());
        this.brokenSound.play();
        this.score += 10;
        this.group.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
          if (e.y < coorY) {
            e.y += 20;
          }
        });
      }
    });
  }

  rotation(item) {
    this.rotateSound.play();
    let pressNum = 1;
    item.getChildren().forEach((e) => {
      const xRound = (Math.round(e.x / 10));
      e.x = (xRound % 2 !== 0 ? xRound : xRound + pressNum) * 10;
      const yRound = Math.round(e.y / 10);
      e.y = (yRound % 2 !== 0 ? yRound : yRound + pressNum) * 10;
    });
    if (item.getChildren().map((e) => e.x).includes(230)) {
      item.getChildren().forEach((e) => { e.x -= 20; });
    }
    pressNum *= -1;
    this.checkLeft = true;
    this.checkRight = true;
  }

  fallComplete(figurrr) {
    this.physics.add.collider(figurrr.getChildren(), this.borderBottom, () => {
      this.checkLeft = false;
      this.checkRight = false;
      this.checkBottom = false;
    });
    this.physics.add.collider(figurrr.getChildren(), this.group.getChildren(), () => {
      this.checkBottom = false;
      this.checkLeft = false;
      this.checkRight = false;
    });
  }

  fallFig() {
    if (this.checkBottom) {
      this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
        e.y += this.speed;
      });
    }
    if (!this.checkBottom) {
      this.joinSound.play();
      this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
        e.y -= 1;
        const yRound = Math.round(e.y / 10);
        const yYG = (yRound % 2 !== 0) ? yRound * 10 : (yRound + 1) * 10;
        this.group.create(e.x, yYG, 'figure').setTint(this.color);
      });
      this.fig.children.entries.forEach((e) => e.destroy());
      this.fig.children.entries.forEach((e) => e.destroy());
      this.fig.children.entries.forEach((e) => e.destroy());
      this.fig.children.entries.forEach((e) => e.destroy());
      this.fig = null;
      this.physics.world.colliders.getActive().forEach((e) => {
        this.physics.world.colliders.remove(e);
      });
      this.checkBottom = true;
      this.randomFig();
      this.checkNeedDelet();
      this.score += 1;
      if (this.score > 800) {
        this.speed = 7;
      } else if (this.score > 700) {
        this.speed = 6;
      } else if (this.score > 600) {
        this.speed = 5;
      } else if (this.score > 450) {
        this.speed = 4;
      } else if (this.score > 300) {
        this.speed = 3;
      } else if (this.score > 100) {
        this.speed = 2;
      } else {
        this.speed = 1;
      }
    }
  }

  moveFig() {
    if (this.cursors.right.isDown || this.swipe.right) {
      this.checkLeft = true;
      this.cursors.right.isDown = false;
      if (this.checkRight) {
        this.swipeSound.play();
        let checkR = false;
        this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
          const yRound = Math.round(e.y / 10);
          const yY = (yRound % 2 !== 0 ? yRound : yRound + 1) * 10;
          this.group.getChildren().forEach((child:Phaser.GameObjects.Sprite) => {
            if (child.getBounds().contains(e.x + 20, yY)) {
              checkR = true;
            }
          });
        });
        if (!checkR) {
          this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
            e.x += 20;
          });
        }
        checkR = false;
      }
      this.physics.add.overlap(this.fig.getChildren(), this.borderRight, () => {
        this.checkRight = false;
      });
    }
    if (this.cursors.left.isDown || this.swipe.left) {
      this.physics.add.collider(this.fig, this.group, () => {
        this.checkLeft = false;
      });
      this.checkRight = true;
      this.cursors.left.isDown = false;
      if (this.checkLeft) {
        this.swipeSound.play();
        let checkL = false;
        this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
          const yRound = Math.round(e.y / 10);
          const yY = (yRound % 2 !== 0 ? yRound : yRound + 1) * 10;
          this.group.getChildren().forEach((child:Phaser.GameObjects.Sprite) => {
            if (child.getBounds().contains(e.x - 20, yY)) {
              checkL = true;
            }
          });
        });
        if (!checkL) {
          this.fig.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
            e.x -= 20;
          });
        }
        checkL = false;
      }
      this.physics.add.overlap(this.fig.getChildren(), this.borderLeft, () => {
        this.checkLeft = false;
      });
    }
    if (this.cursors.space.isDown || this.swipe.up) {
      this.cursors.space.isDown = false;
      if (this.numberFigure !== 6) {
        const figure = this.fig.getChildren();
        const coorX = figure.map((e:Phaser.GameObjects.Sprite) => e.x).reduce((a, e) => a + e) / 4;
        const coorY = figure.map((e:Phaser.GameObjects.Sprite) => e.y).reduce((a, e) => a + e) / 4;
        this.fig.rotateAround({ x: coorX, y: coorY }, Math.PI / 2);
        this.rotation(this.fig);
      }
    }
    if (this.cursors.down.isDown || this.swipe.down) {
      this.cursors.down.isDown = false;
      this.speed = 10;
    }
  }

  private pauseGame() {
    this.Memory.setPrevGame('tetris');
    this.scene.pause();
    this.scene.launch('PauseMenu');
  }
}
