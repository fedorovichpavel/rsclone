import Header from "./landings/header/Header";

export default class App {
  private static instance: App;

  private static exists: boolean;

  public header: Header;

  constructor() {
    if (App.exists) return App.instance;
    App.instance = this;
    App.exists = true;
    this.init();
  }

  init() {
    this.header = new Header();
  }
}
