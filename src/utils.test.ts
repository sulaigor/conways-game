import { STATE_ONE, STATE_TWO } from './states';
import { getNewState } from './utils';

test('return STATE_TWO from STATE_ONE', () => {
  expect(getNewState(STATE_ONE)).toBe(STATE_TWO);
});

test('return STATE_ONE from STATE_TWO', () => {
  expect(getNewState(STATE_TWO)).toBe(STATE_ONE);
});
