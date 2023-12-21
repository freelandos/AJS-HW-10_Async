/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
