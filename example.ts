import { getNewState, getParsedGameArea } from 'utils';
import { STATE_ONE } from 'states';

const parsedStateOne = getParsedGameArea(STATE_ONE);
const newState = getNewState(parsedStateOne);
const finalState = getNewState(newState);

console.log('Initial game state:', parsedStateOne);
console.log('New game state:', newState);
console.log('Final game state:', finalState);
