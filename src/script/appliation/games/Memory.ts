// @ts-ignore
import Api from '../Api/Api.ts';
// @ts-ignore
import UserDto from './dto/UserDto.ts';

export default class Memory {
  private static exists: any;

  // @ts-ignore
  private static instance: this;

  private scorePoint:number;

  private prevGame: string;

  private config: { type: number,
                    physics: {default: string},
                    width: number,
                    height: number,
                    parent: string,
                    scene: any[] };

  public api: Api;

  public user:UserDto;

  constructor() {
    if (Memory.exists) return Memory.instance;
    Memory.instance = this;
    Memory.exists = true;
    this.api = new Api();
  }

  getScorePoint():number {
    return this.scorePoint;
  }

  getPrevGame():string {
    return this.prevGame;
  }

  getConfig() {
    return this.config;
  }

  setScorePoint(point:number) {
    this.scorePoint = point;
  }

  setPrevGame(string:string) {
    this.prevGame = string;
  }

  setConfig(config: {type: number, physics: {default: string},
    width: number, height: number, parent: string, scene: any[]}) {
    this.config = config;
  }

  setUser(user:UserDto) {
    this.user = user;
  }
}
