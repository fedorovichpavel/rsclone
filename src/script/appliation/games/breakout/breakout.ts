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

  private bricks: Phaser.Physics.Arcade.StaticGroup;

  private paddle: Phaser.Physics.Arcade.Image;

  private ball: Phaser.Physics.Arcade.Image;

  private map: Phaser.GameObjects.TileSprite;

  private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private punchSound: Phaser.Sound.BaseSound;

  private pauseBtn: Phaser.GameObjects.Sprite;

  constructor() {
    super('breakout');
    this.Memory = new Memory();
  }

  create() {
    this.map = this.add.tileSprite(0, 0, 220, 460, 'breakmap').setOrigin(0, 0);
    this.physics.world.setBoundsCollision(true, true, true, false);
    this.score = 0;
    this.tableScore = this.add.text(22, 0, `Score:${this.score}`, style);
    this.punchSound = this.sound.add('punch');
    this.bricks = this.physics.add.staticGroup({
      key: 'coin',
      frameQuantity: 49,
      gridAlign: {
        width: 7, height: 10, cellWidth: 20, cellHeight: 20, x: 50, y: 90,
      },
    });
    this.ball = this.physics.add.image(110, 400, 'ball').setCollideWorldBounds(true).setBounce(1);
    this.ball.setData('onPaddle', true);

    this.paddle = this.physics.add.image(110, 450, 'paddle').setImmovable();

    this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this);
    this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

    this.input.on('pointermove', function pMove(pointer) {
      this.paddle.x = Phaser.Math.Clamp(pointer.x, 40, 180);

      if (this.ball.getData('onPaddle')) {
        this.ball.x = this.paddle.x;
      }
    }, this);

    this.input.on('pointerup', function pUp() {
      if (this.ball.getData('onPaddle')) {
        this.ball.setVelocity(-75, -300);
        this.ball.setData('onPaddle', false);
      }
    }, this);
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

  hitBrick(ball, brick) {
    brick.disableBody(true, true);
    this.score += 1;
    if (this.bricks.countActive() === 0) {
      this.resetLevel();
    }
    this.punchSound.play();
  }

  resetBall() {
    this.ball.setVelocity(0);
    this.ball.setPosition(this.paddle.x, 420);
    this.ball.setData('onPaddle', true);
  }

  resetLevel() {
    this.resetBall();
    this.bricks.getChildren().forEach((brick:Phaser.Physics.Arcade.Sprite) => {
      brick.enableBody(false, 0, 0, true, true);
    });
  }

  hitPaddle(ball, paddle) {
    this.score += 1;
    let diff = 0;
    if (ball.x < paddle.x) {
      diff = paddle.x - ball.x;
      ball.setVelocityX(-10 * diff);
    } else if (ball.x > paddle.x) {
      diff = ball.x - paddle.x;
      ball.setVelocityX(10 * diff);
    } else {
      ball.setVelocityX(2 + Math.random() * 8);
    }
    this.punchSound.play();
  }

  gameOver() {
    this.scene.pause();
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('breakout');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 500);
  }

  move() {
    this.paddle.setVelocityX(0);
    if (this.cursors.right.isDown) {
      if (this.paddle.x < 170) {
        this.paddle.setVelocityX(500);
      }
    }

    if (this.cursors.left.isDown) {
      if (this.paddle.x > 50) {
        this.paddle.setVelocityX(-500);
      }
    }
  }

  update() {
    if (this.ball.y > 470) {
      this.gameOver();
    }
    this.tableScore.text = `Score:${this.score}`;
    this.move();
  }

  private pauseGame() {
    this.Memory.setPrevGame('breakout');
    this.scene.pause();
    this.scene.launch('PauseMenu');
  }
}
