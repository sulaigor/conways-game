import { CELL_SEPARATOR, ROW_SEPARATOR } from './const';
import { CellStates, GameAreaType, ICellPosition } from './types';

export const getParsedGameArea = (gameState: string): GameAreaType => {
  const parsedState = gameState
    .replace(/\s+/g, ' ')
    .trim()
    .split(ROW_SEPARATOR)
    .reduce((acc: GameAreaType, row) => {
      const trimedRow = row.trim();

      if (trimedRow) acc.push(trimedRow.split(CELL_SEPARATOR) as Array<CellStates>);
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

export const getCellSurroundingsCount = (
  gameArea: GameAreaType,
  currentCellPosition: ICellPosition,
): number => {
  const { x, y } = currentCellPosition;
  if (x < 0 || y < 0 || x > gameArea.length - 1 || y > gameArea.length - 1) {
    throw new Error('Not valid position!');
  }

  let surroundingsCount = 0;
  const surroundingsPositions = [-1, 0, 1];

  for (const surroundingsY of surroundingsPositions) {
    for (const surroundingsX of surroundingsPositions) {
      const neighborCellX = x + surroundingsX;
      const neighborCellY = y + surroundingsY;

      if (neighborCellX === x && neighborCellY === y) continue;

      const neighborCell = gameArea[neighborCellY] && gameArea[neighborCellY][neighborCellX];
      if (neighborCell) surroundingsCount += parseInt(neighborCell);
    }
  }

  return surroundingsCount;
};

export const getNewState = (initState: string): string => {
  const parsedGameArea = getParsedGameArea(initState);
  const newGameArea: GameAreaType = [];

  for (const y in parsedGameArea) {
    const currentRow = parsedGameArea[y];
    newGameArea.push([]);

    for (const x in currentRow) {
      const currentCellSurroundings = getCellSurroundingsCount(parsedGameArea, {
        x: parseInt(x),
        y: parseInt(y),
      });

      if (parsedGameArea[y][x] === CellStates.LIVE) {
        if (currentCellSurroundings === 2 || currentCellSurroundings === 3) {
          newGameArea[y][x] = CellStates.LIVE;
        } else {
          newGameArea[y][x] = CellStates.DEAD;
        }
      } else {
        if (currentCellSurroundings === 3) {
          newGameArea[y][x] = CellStates.LIVE;
        } else {
          newGameArea[y][x] = CellStates.DEAD;
        }
      }
    }
  }

  return getStringifiedGameArea(newGameArea);
};
