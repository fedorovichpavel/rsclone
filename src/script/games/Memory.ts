
// @ts-ignore
import UserApi from './Api/UserApi.ts';

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

  public api: UserApi;

  constructor() {
    if (Memory.exists) return Memory.instance;
    Memory.instance = this;
    Memory.exists = true;
    this.api = new UserApi();
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
}
