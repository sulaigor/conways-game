import { CellStates, GameAreaType } from './types';
import { STATE_ONE, STATE_TWO } from './states';
import { getNewState, getParsedGameArea, getStringifiedGameArea, getCellSurroundingsCount } from './utils';

const STRING_STATE = '1,0;0,1;';
const ARRAY_STATE: GameAreaType = [
  [CellStates.LIVE, CellStates.DEAD],
  [CellStates.DEAD, CellStates.LIVE],
];

describe('getParsedGameArea function:', () => {
  test('returns parsed array state from string', () => {
    expect(getParsedGameArea(STRING_STATE)).toStrictEqual(ARRAY_STATE);
  });

  test('throw error while game state contains not valid cell states', () => {
    const notValidState = '1,2;0,1;';

    expect(() => getParsedGameArea(notValidState)).toThrowError('Not valid cell states!');
  });

  test('throw error while game state is now square', () => {
    const notValidState = '1,0;';

    expect(() => getParsedGameArea(notValidState)).toThrowError('Not valid game state!');
  });
});

describe('getStringifiedGameArea function:', () => {
  test('returns parsed string state from array', () => {
    expect(getStringifiedGameArea(ARRAY_STATE)).toBe(STRING_STATE);
  });
});

describe('getCellSurroundingsCount function:', () => {
  const gameArea: GameAreaType = [
    [CellStates.LIVE, CellStates.LIVE, CellStates.DEAD],
    [CellStates.DEAD, CellStates.LIVE, CellStates.DEAD],
    [CellStates.DEAD, CellStates.LIVE, CellStates.DEAD],
  ];

  test('returns valid surroundings count of live cell', () => {
    expect(getCellSurroundingsCount(gameArea, { x: 1, y: 1 })).toBe(3);
  });

  test('returns valid surroundings count of dead cell', () => {
    expect(getCellSurroundingsCount(gameArea, { x: 2, y: 1 })).toBe(3);
  });

  test('throw error while x position is out of game area', () => {
    expect(() => getCellSurroundingsCount(gameArea, { x: 3, y: 0 })).toThrowError('Not valid position!');
  });

  test('throw error while x position is negative', () => {
    expect(() => getCellSurroundingsCount(gameArea, { x: -1, y: 0 })).toThrowError('Not valid position!');
  });

  test('not throw error while position is in of game area', () => {
    expect(() => getCellSurroundingsCount(gameArea, { x: 0, y: 0 })).not.toThrowError('Not valid position!');
  });
});

describe('getNewState function:', () => {
  test('return STATE_TWO from STATE_ONE', () => {
    expect(getNewState(STATE_ONE)).toBe(STATE_TWO);
  });

  test('return STATE_ONE from STATE_TWO', () => {
    expect(getNewState(STATE_TWO)).toBe(STATE_ONE);
  });
});
