// @ts-ignore
import Memory from '../Memory.ts';

export default class UserDto {
  public readonly avatar: string;

  public breakout: number;

  public flappyBird: number;

  public readonly login: string;

  // eslint-disable-next-line camelcase
  public readonly node_id: string;

  public race: number;

  public snake: number;

  public snow: number;

  public spaceAttack: number;

  public tetris: number;

  public url: string;

  public totalScore: number;

  // eslint-disable-next-line max-len,camelcase
  constructor(avatar: string,
    breakout: number,
    flappyBird: number,
    login: string,
    // eslint-disable-next-line camelcase
    node_id: string,
    race: number,
    snake: number,
    snow: number,
    spaceAttack: number,
    tetris: number,
    url: string) {
    this.avatar = avatar;
    this.breakout = breakout;
    this.flappyBird = flappyBird;
    this.login = login;
    // eslint-disable-next-line camelcase
    this.node_id = node_id;
    this.race = race;
    this.snake = snake;
    this.snow = snow;
    this.spaceAttack = spaceAttack;
    this.tetris = tetris;
    this.url = url;
    this.updateTotalScore();
    const memory = new Memory();
    memory.setUser(this);
  }

  public updateTotalScore() {
    this.totalScore = this.breakout + this.flappyBird
      + this.race + this.snake + this.snow
      + this.spaceAttack + this.tetris;
  }
}
