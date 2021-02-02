// @ts-ignore
import { URL } from '../../utils/tools.ts';
// @ts-ignore
import UserDto from '../games/dto/UserDto.ts';

const axios = require('axios').default;

export default class Api {
  public readonly getListUsers = async () => {
    const response = await axios.get(`${URL}/score`).then(((r: Promise<Array<UserDto>>) => r));
    return response.data;
  }

  public readonly getUserById = async (id: string) => {
    const response = await axios.get(`${URL}/score/${id}`).then(((r: Promise<UserDto>) => r));
    return response;
  }

  public readonly setScoreUser = async (id: string, user: UserDto) => {
    const response = await axios.put(`${URL}/score${id}`, JSON.stringify(user)).then(((r: Promise<UserDto>) => r));
    return response;
  }

  public readonly auth = async (code) => {
    const response = await axios.get(`https://score-api2020q3.herokuapp.com/login/github/${code}`);
    return response.data;
  }
}
