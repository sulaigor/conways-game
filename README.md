# Conway's game

### Usage:

```javascript
import getNewState, { GameAreaType, CellStates } from 'conways-game';

const initState: GameAreaType = [
  [CellStates.LIVE, CellStates.DEAD],
  [CellStates.DEAD, CellStates.LIVE],
];

const newState = getNewState(initState);
```

### Cell states:

- Live state is represent by `CellStates.LIVE | '1'`
- Dead state is represent by `CellStates.DEAD | '0'`

### Feel free to try example:

```bash
  yarn example | npm run example
```
