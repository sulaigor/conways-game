import { GameAreaType } from 'types';
import { STATE_ONE } from 'states';
import { getNewState, getParsedGameArea, isCellLive } from 'utils';

const getPrintedState = (gameState: GameAreaType): string =>
  `\t${gameState
    .map((rowArr) => `|${rowArr.map((cellState) => (isCellLive(cellState) ? '◼' : ' ')).join('|')}|`)
    .join('\n\t')}`;

let currentStep = 1;
const maxSteps = 10;
let newState = getParsedGameArea(STATE_ONE);

const pringNewState = () => {
  console.clear();
  console.log('Game step', currentStep, '\n');
  console.log(getPrintedState(newState));

  if (currentStep >= maxSteps) return;
  newState = getNewState(newState);
  setTimeout(pringNewState, 250);
  currentStep++;
};

pringNewState();
