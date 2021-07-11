import { CELL_SEPARATOR, ROW_SEPARATOR } from './const';
import { CellStates, GameAreaType } from './types';

export const getParsedGameArea = (gameState: string): GameAreaType => {
  const parsedState = gameState.split(ROW_SEPARATOR).reduce((acc: GameAreaType, row) => {
    if (row) {
      acc.push(row.split(CELL_SEPARATOR) as Array<CellStates>);
    }
    return acc;
  }, []);

  for (const rowArr of parsedState) {
    if (rowArr.some((cell) => cell !== CellStates.LIVE && cell !== CellStates.DEAD)) {
      throw new Error('Not valid cell states!');
    }

    if (rowArr.length !== parsedState.length) {
      throw new Error('Not valid game state!');
    }
  }

  return parsedState as GameAreaType;
};

export const getStringifiedGameArea = (gameState: GameAreaType): string => {
  const parsedState = gameState.map((row) => row.join(CELL_SEPARATOR)).join(ROW_SEPARATOR);
  return `${parsedState}${ROW_SEPARATOR}`;
};

export const getNewState = (initState: string): string => {
  return '';
};
