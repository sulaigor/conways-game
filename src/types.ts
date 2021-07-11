export enum CellStates {
  LIVE = '1',
  DEAD = '0',
}

export type GameAreaType = Array<Array<CellStates>>;

export interface ICellPosition {
  x: number;
  y: number;
}
