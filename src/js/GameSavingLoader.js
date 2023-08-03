import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const data = await json(buffer);
    return JSON.parse(data);
  }
}
