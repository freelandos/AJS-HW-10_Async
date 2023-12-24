import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data1 = await read();
      const data2 = await json(data1);
      const data3 = JSON.parse(data2);
      return new GameSaving(data3);
    } catch (error) {
      return error;
    }
  }
}
