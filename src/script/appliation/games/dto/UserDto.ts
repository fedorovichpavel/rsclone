export default class UserDto {
  _id: string

  scorePointTetris: number

  scorePointRace: number

  scorePointSnake: number

  scorePointTanks: number

  scorePointSpaceBreak: number

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
}
