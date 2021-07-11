enum CellStates {
  LIVE = '1',
  DEAD = '0',
}

type GameAreaType = Array<Array<CellStates>>;

export const getParsedGameArea = (gameState: string): GameAreaType => {
  const parsedState = gameState.split(';').reduce((acc: GameAreaType, row) => {
    if (row) {
      acc.push(row.split(',') as Array<CellStates>);
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

export const getNewState = (initState: string): string => {
  return '';
};
