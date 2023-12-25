import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    const { id, created, userInfo } = JSON.parse(value);
    return new GameSaving(id, created, userInfo);
  }
}
