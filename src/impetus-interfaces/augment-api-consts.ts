// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
       * 
       * Must be configured to result in a weight that makes each call fit in a block.
       **/
      removeItemsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of holds that can exist on an account at any time.
       **/
      maxHolds: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    giveaway: {
      maxSet: u32 & AugmentedConst<ApiType>;
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      potDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    grandpa: {
      /**
       * Max Authorities in use
       **/
      maxAuthorities: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of entries to keep in the set id to session index mapping.
       * 
       * Since the `SetIdSession` map is only used for validating equivocations this
       * value should relate to the bonding duration of whatever staking system is
       * being used (if any). If equivocation handling is not enabled then this value
       * can be zero.
       **/
      maxSetIdSessionEntries: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    luckyNumber: {
      maxSet: u32 & AugmentedConst<ApiType>;
      maxUserRewardPerRound: u32 & AugmentedConst<ApiType>;
      /**
       * The Lottery's pallet id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      potDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    managerCommittee: {
      /**
       * The maximum weight of a dispatch call that can be proposed and executed.
       **/
      maxProposalWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nfts: {
      /**
       * The maximum approvals an item could have.
       **/
      approvalsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Disables some of pallet's features.
       **/
      features: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum attributes approvals an item could have.
       **/
      itemAttributesApprovalsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of attributes a user could set per call.
       **/
      maxAttributesPerCall: u32 & AugmentedConst<ApiType>;
      /**
       * The max duration in blocks for deadlines.
       **/
      maxDeadlineDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of tips a user could send.
       **/
      maxTips: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    uniques: {
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
