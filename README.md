# Impetus-types

This is the lib used for users who want to connect to the Impetus Substrate chain. Based on `@polkadot/typegen` to to generate type definitions that can be used to decorate the @polkadot/api. It uses both types defined for the specific chain as well as the chain metadata to generate TypeScript interfaces. This means that interfaces such as api.query.*, api.tx.* and api.consts.* will be decorated based on chain-specific information, instead of an un-augmented catch-all definition.

## Development

### Installation

Install dependencies with npm:

```bash
npm install impetus-types
```

### Usage

For simple usage, we have added the `src/index.ts` file that show how the metadata and types actually decorate the API. In addition, we also have setup instructions included here.

```
import 'impetus-types';
```
Then you can query some information from impetus chain, e.g: We can simple index data of first round impetus: 

```
export async function indexRoundInfo(): Promise<void> {
  let roundInfo = await api.query.luckyNumber.lottery(0);
  const { start, minPrice, rate } = roundInfo.unwrap();
  
  console.log(`Round 0 start at ${start} with min price for buy ${minPrice}. We can easy win with rate ${rate}`);
}
```

Start your source and enjoy. Just a really simple walk-through to customizing the API TypeScript definitions for impetus chain.

