import * as Phaser from 'phaser';
// @ts-ignore
import jump from '../../../assets/audio/jump.mp3';
// @ts-ignore
import boom from '../../../assets/audio/boom.mp3';
// @ts-ignore
import punch from '../../../assets/audio/punch.mp3';
// @ts-ignore
import rotate from '../../../assets/audio/rotate.mp3';
// @ts-ignore
import join from '../../../assets/audio/join.mp3';
// @ts-ignore
import broken from '../../../assets/audio/broken.mp3';
// @ts-ignore
import fall from '../../../assets/audio/fall.mp3';
// @ts-ignore
import gameovermp3 from '../../../assets/audio/gameover.mp3';
// @ts-ignore
import swipe from '../../../assets/audio/swipe.mp3';
// @ts-ignore
import carDrive from '../../../assets/audio/carDrive.mp3';
// @ts-ignore
import driving from '../../../assets/audio/Driving.mp3';
// @ts-ignore
import dtp from '../../../assets/audio/dtp.mp3';
// @ts-ignore
import snow from '../../../assets/audio/snow.mp3';
// @ts-ignore
import boombom from '../../../assets/audio/snowboom.mp3';

const defaultScreen = require('../../../assets/image/map2.png');
const road = require('../../../assets/image/road.png');
const car = require('../../../assets/image/car.png');
const carPlayer = require('../../../assets/image/carPlayer.png');
const btnNoActive = require('../../../assets/image/btnNoActive.png');
const btnActive = require('../../../assets/image/btnActive.png');
const map = require('../../../assets/image/map.png');
const figure = require('../../../assets/image/figure.png');
const line = require('../../../assets/image/Line.png');
const line2 = require('../../../assets/image/Line2.png');
const head = require('../../../assets/image/head.png');
const body = require('../../../assets/image/body.png');
const tail = require('../../../assets/image/tail.png');
const mouse = require('../../../assets/image/mouse.png');
const flower = require('../../../assets/image/flower.png');
const ground1 = require('../../../assets/image/ground1.png');
const snowground = require('../../../assets/image/snowground.png');
const snowman = require('../../../assets/image/snowman.png');
const snowball = require('../../../assets/image/snowball.png');
const bomb = require('../../../assets/image/bomb.png');
const tree = require('../../../assets/image/tree.png');
const ball = require('../../../assets/image/ball.png');
const paddle = require('../../../assets/image/paddle.png');
const ship = require('../../../assets/image/ship.png');
const bird = require('../../../assets/image/bird.png');
const pipe = require('../../../assets/image/pipe.png');
const ground = require('../../../assets/image/ground.png');
const sky = require('../../../assets/image/sky.png');
const covid = require('../../../assets/image/covid.png');
const space = require('../../../assets/image/space.png');
const coin = require('../../../assets/image/coin.png');
const breakmap = require('../../../assets/image/breakmap.png');
const fullscr = require('../../../assets/image/fullscreen.png');
const muteon = require('../../../assets/image/muteon.png');
const muteoff = require('../../../assets/image/muteoff.png');
const pauseBtn = require('../../../assets/image/pauseBtn.png');

export default class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.image('defaultScreen', defaultScreen);
    this.load.image('pauseBtn', pauseBtn);
    this.load.image('background', road);
    this.load.image('car', car);
    this.load.image('carPlayer', carPlayer);
    this.load.image('btnNoActive', btnNoActive);
    this.load.image('btnActive', btnActive);
    this.load.image('backgroundTetris', map);
    this.load.image('figure', figure);
    this.load.image('line', line);
    this.load.image('line2', line2);
    this.load.image('head', head);
    this.load.image('body', body);
    this.load.image('tail', tail);
    this.load.image('mouse', mouse);
    this.load.image('flower', flower);
    this.load.image('ground1', ground1);
    this.load.image('tree', tree);
    this.load.image('bomb', bomb);
    this.load.image('snowball', snowball);
    this.load.image('snowman', snowman);
    this.load.image('snowground', snowground);
    this.load.image('ball', ball);
    this.load.image('paddle', paddle);
    this.load.image('ship', ship);
    this.load.image('bird', bird);
    this.load.image('pipe', pipe);
    this.load.image('ground', ground);
    this.load.image('sky', sky);
    this.load.image('covid', covid);
    this.load.image('space', space);
    this.load.image('coin', coin);
    this.load.image('breakmap', breakmap);
    this.load.image('fullscreen', fullscr);
    this.load.image('muteon', muteon);
    this.load.image('muteoff', muteoff);

    this.load.audio('jump', jump);
    this.load.audio('boom', boom);
    this.load.audio('punch', punch);
    this.load.audio('rotate', rotate);
    this.load.audio('broken', broken);
    this.load.audio('join', join);
    this.load.audio('fall', fall);
    this.load.audio('gameovermp3', gameovermp3);
    this.load.audio('swipe', swipe);
    this.load.audio('carDrive', carDrive);
    this.load.audio('driving', driving);
    this.load.audio('dtp', dtp);
    this.load.audio('snow', snow);
    this.load.audio('boombom', boombom);
  }

  create() {
    this.scene.launch('MainMenu');
  }
}
