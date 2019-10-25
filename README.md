# Crescendo
Crescendo is a TypeScript wrapper for the [League of Legends API](https://developer.riotgames.com/). It currently does **not** support all endpoints, as it's being rewritten from scratch with proper typings.

## Current endpoints:
[Match V4](https://developer.riotgames.com/apis#match-v4): Supporting all functions. `GET_getMatchIdsByTournamentCode` and `GET_getMatchByTournamentCode` are implemented but untested.

## Installation
Crescendo is currently not distributed, as it's unfinished. It will be released as a Node package once it's ready. In the meantime, you can download the source and add it to your Node.js environment manually.

## Usage
```typescript
import Crescendo from 'crescendo'

const crescendo = new Crescendo('YOUR-API-KEY-HERE')

const test = async () => {
    const matchData = await crescendo.matchV4.getMatch("matchid", "region");
    console.log(matchData);
};

test()
```

## License
[GNU AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html)