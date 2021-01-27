// @ts-ignore
import { URL } from '../../utils/tools.ts';
// @ts-ignore
import UserDto from '../games/dto/UserDto.ts';

const axios = require('axios').default;

export default class Api {
  public getListUsers = async () => {
    const response = await axios.get(`${URL}/score`).then(((r: Promise<Array<UserDto>>) => r));
    return response;
  }

  public getUserById = async (id: string) => {
    const response = await axios.get(`${URL}/score/${id}`).then(((r: Promise<UserDto>) => r));
    return response;
  }

  public setScoreUser = async (id: string, user: UserDto) => {
    const response = await axios.put(`${URL}/score${id}`, {
      scorePointTetris: user.scorePointTetris,
      scorePointRace: user.scorePointRace,
      scorePointSnake: user.scorePointSnake,
      scorePointTanks: user.scorePointTanks,
      scorePointSpaceBreak: user.scorePointSpaceBreak,
    }).then(((r: Promise<UserDto>) => r));
    return response;
  }

  public createNewUser = async () => {
    const response = await axios.post(`${URL}/score`, {
      scorePointTetris: 0,
      scorePointRace: 0,
      scorePointSnake: 0,
      scorePointTanks: 0,
      scorePointSpaceBreak: 0,
    }).then(((r: Promise<UserDto>) => r));
    // eslint-disable-next-line no-underscore-dangle
    return new UserDto(response.data._id,
      response.data.scorePointTetris,
      response.data.scorePointRace,
      response.data.scorePointSnake,
      response.data.scorePointTanks,
      response.data.scorePointSpaceBreak);
  }

  public auth = async (code) => {
    const response = await axios.get(`https://score-api2020q3.herokuapp.com/login/github/${code}`);
    return response.data;
  }
}
