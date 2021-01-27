import '../styles/style.scss';
import './script.ts';
import './hovers.ts';
// @ts-ignore
import Memory from './appliation/games/Memory.ts';
// @ts-ignore
import App from './appliation/App.ts';
// @ts-ignore
import { CONFIG } from './utils/tools.ts';
// eslint-disable-next-line import/extensions

const memory = new Memory();
memory.setConfig(CONFIG);

export default new App();
