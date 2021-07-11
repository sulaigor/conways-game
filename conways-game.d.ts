declare module 'conways-game' {
  import { GameAreaType, CellStates } from './src/types';

  export { GameAreaType, CellStates };
  export default (gameState: GameAreaType) => GameAreaType;
}
