export default class UserDto {
  private _id: string

  private scorePointTetris: number

  private scorePointRace: number

  private scorePointSnake: number

  private scorePointTanks: number

  private scorePointSpaceBreak: number

  constructor(_id: string, scorePointTetris: number, scorePointRace: number,
    scorePointSnake: number, scorePointTanks: number,
    scorePointSpaceBreak: number) {
    // eslint-disable-next-line no-underscore-dangle
    this._id = _id;
    this.scorePointTetris = scorePointTetris;
    this.scorePointRace = scorePointRace;
    this.scorePointSnake = scorePointSnake;
    this.scorePointTanks = scorePointTanks;
    this.scorePointSpaceBreak = scorePointSpaceBreak;
  }

  get ScorePointTetris(): number {
    return this.scorePointTetris;
  }

  set ScorePointTetris(value: number) {
    this.scorePointTetris = value;
  }

  get ScorePointRace(): number {
    return this.scorePointRace;
  }

  set ScorePointRace(value: number) {
    this.scorePointRace = value;
  }

  get ScorePointSnake(): number {
    return this.scorePointSnake;
  }

  set ScorePointSnake(value: number) {
    this.scorePointSnake = value;
  }

  get ScorePointTanks(): number {
    return this.scorePointTanks;
  }

  set ScorePointTanks(value: number) {
    this.scorePointTanks = value;
  }

  get ScorePointSpaceBreak(): number {
    return this.scorePointSpaceBreak;
  }

  set ScorePointSpaceBreak(value: number) {
    this.scorePointSpaceBreak = value;
  }
}
