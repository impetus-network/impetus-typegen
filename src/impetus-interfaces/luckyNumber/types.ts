// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u8 } from '@polkadot/types-codec';
import type { Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name LuckyNumberConfig */
export interface LuckyNumberConfig extends Struct {
  readonly minPrice: Balance;
  readonly start: BlockNumber;
  readonly length: BlockNumber;
  readonly delay: BlockNumber;
  readonly rate: u8;
  readonly repeat: bool;
}

export type PHANTOM_LUCKYNUMBER = 'luckyNumber';
