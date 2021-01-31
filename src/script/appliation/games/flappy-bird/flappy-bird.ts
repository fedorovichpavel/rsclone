import * as Phaser from 'phaser';
// @ts-ignore
import Memory from '../Memory.ts';

const style = {
  fontFamily: 'Pixel',
  color: '#000000',
  fontSize: '18px',
};

export default class FlappyBird extends Phaser.Scene {
private Memory: Memory;

private map: Phaser.GameObjects.TileSprite;

private bird: Phaser.Physics.Arcade.Image;

private score: number;

  private tableScore: Phaser.GameObjects.Text;

  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  private pipes: Phaser.Physics.Arcade.Group;

  private speed: number;

  private jumpSound: Phaser.Sound.BaseSound;

  private fallSound: Phaser.Sound.BaseSound;

private timer: Phaser.Time.TimerEvent;

private break: boolean;

  private pauseBtn: any;

  constructor() {
    super('flappyBird');
    this.Memory = new Memory();
  }

  create() {
    this.map = this.add.tileSprite(0, 0, 220, 400, 'sky').setOrigin(0, 0);
    const ground = this.physics.add.staticGroup();
    ground.create(110, 430, 'ground');
    this.score = 0;
    this.speed = -170;
    this.break = false;
    this.jumpSound = this.sound.add('jump');
    this.fallSound = this.sound.add('fall');
    this.tableScore = this.add.text(22, 0, `Score:${this.score}`, style);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.bird = this.physics.add.image(60, 230, 'bird').setScale(0.7).setCollideWorldBounds(true);
    this.physics.add.collider(this.bird, ground);
    this.bird.body.gravity.y = 1000;
    this.input.on('pointerdown', function pMove() {
      this.jump();
    }, this);

    this.pipes = this.physics.add.group();
    this.physics.add.overlap(this.bird, this.pipes, this.breaking, null, this);
    this.timer = this.time.addEvent({
      delay: 1500,
      callback: this.addRowOfPipes,
      callbackScope: this,
      loop: true,
    });
    this.tweens.add({
      targets: this.bird,
      angle: 20,
      duration: 100,
      ease: 'Sine.easeInOut',
    });

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
    if (this.bird.y > 376) {
      this.fallSound.play();
      this.gameOver();
    }
    this.pipes.getChildren().forEach((e:Phaser.GameObjects.Sprite) => {
      if (e.x < -20) { e.destroy(); }
    });
    this.move();
    this.tableScore.text = `Score:${this.score}`;
    if (this.score % 20 === 0 && this.score !== 0) {
      this.speed -= 10;
      this.score += 1;
    }
    if (this.bird.angle < 20) {
      this.bird.angle += 1;
    }
  }

  breaking() {
    this.break = true;
    this.timer.remove();
    this.pipes.getChildren().forEach((p:Phaser.Physics.Arcade.Sprite) => {
    // p.body.velocity.x = 0;
      p.setVelocityX(0);
    });
  }

  gameOver() {
    this.scene.pause();
    this.break = false;
    this.Memory.setScorePoint(this.score);
    this.Memory.setPrevGame('flappyBird');
    setTimeout(() => {
      this.scene.restart(this);
      this.scene.stop();
      this.scene.start('GameOver');
    }, 1000);
  }

  jump() {
    if (this.break) { return; }
    this.bird.body.velocity.y = -350;
    this.bird.angle = -20;
    this.jumpSound.play();
  }

  addPipe(x, y) {
    const pipe:Phaser.Types.Physics.Arcade.SpriteWithDynamicBody = this.physics.add.sprite(x, y, 'pipe');
    this.pipes.add(pipe);
    pipe.body.velocity.x = this.speed;
  // pipe.checkWorldBounds = true;
  // pipe.outOfBoundsKill = true;
  }

  addRowOfPipes() {
    const hole = Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < 7; i += 1) {
      if (i !== hole && i !== hole + 1) {
        this.addPipe(400, i * 60 + 10);
      }
    }
    setTimeout(() => {
      if (!this.break) {
        this.score += 1;
      }
    }, 2000);
  }

  move() {
    if (this.cursors.space.isDown) {
      this.cursors.space.isDown = false;
      this.jump();
    }
  }

  private pauseGame() {
    this.Memory.setPrevGame('flappyBird');
    this.scene.pause();
    this.scene.launch('PauseMenu');
  }
}
