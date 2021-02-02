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

  public readonly setScoreUser = async (user: UserDto) => {
    const response = await axios.put(`${URL}/score/${user.node_id}`, {
      node_id: user.node_id,
      snake: user.snake,
      race: user.race,
      tetris: user.tetris,
      spaceAttack: user.spaceAttack,
      flappyBird: user.flappyBird,
      snow: user.snow,
      url: user.url,
      avatar: user.avatar,
      breakout: user.breakout,
      login: user.login,
      totalScore: user.totalScore,
    }).then(((r: Promise<UserDto>) => r));
    return response;
  }

  public readonly auth = async (code) => {
    const response = await axios.get(`${URL}/login/github/${code}`);
    return response.data;
  }
}
