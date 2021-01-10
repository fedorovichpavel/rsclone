export default class Memory {
  private static exists: any;

  // @ts-ignore
  private static instance: this;

  private scorePoint:number;

  private prevGame: string;

  private config: {};

  constructor() {
    if (Memory.exists) return Memory.instance;
    Memory.instance = this;
    Memory.exists = true;
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

  setConfig(config) {
    this.config = config;
  }
}
