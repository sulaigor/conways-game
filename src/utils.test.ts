import { STATE_ONE, STATE_TWO } from './states';
import { getNewState, getParsedGameArea } from './utils';

describe('getParsedGameArea function:', () => {
  test('return parsed array state from string', () => {
    const validState = '1,0;0,1;';
    const validReturns = [
      ['1', '0'],
      ['0', '1'],
    ];

    expect(getParsedGameArea(validState)).toStrictEqual(validReturns);
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

describe('getNewState function:', () => {
  test('return STATE_TWO from STATE_ONE', () => {
    expect(getNewState(STATE_ONE)).toBe(STATE_TWO);
  });

  test('return STATE_ONE from STATE_TWO', () => {
    expect(getNewState(STATE_TWO)).toBe(STATE_ONE);
  });
});
