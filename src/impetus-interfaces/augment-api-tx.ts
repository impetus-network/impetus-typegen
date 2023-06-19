// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable'

import type {
  ApiTypes,
  AugmentedSubmittable,
  SubmittableExtrinsic,
  SubmittableExtrinsicFunction,
} from '@polkadot/api-base/types'
import type {
  Bytes,
  Compact,
  Option,
  U256,
  Vec,
  bool,
  u128,
  u32,
  u64,
  u8,
} from '@polkadot/types-codec'
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types'
import type {
  AccountId32,
  Call,
  H160,
  H256,
  MultiAddress,
  Permill,
} from '@polkadot/types/interfaces/runtime'
import type {
  EthereumTransactionTransactionV2,
  SpConsensusGrandpaEquivocationProof,
  SpCoreVoid,
  SpWeightsWeightV2Weight,
} from '@polkadot/types/lookup'

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>
export type __SubmittableExtrinsic<ApiType extends ApiTypes> =
  SubmittableExtrinsic<ApiType>
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> =
  SubmittableExtrinsicFunction<ApiType>

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * ## Complexity
       * - Same as transfer, but additional read and write because the source account is not
       * assumed to be in the overlay.
       **/
      forceTransfer: AugmentedSubmittable<
        (
          source:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, MultiAddress, Compact<u128>]
      >
      /**
       * Unreserve some balance from a user by force.
       *
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          amount: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, u128]
      >
      /**
       * Set the balances of a given account.
       *
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also alter the total issuance of the system (`TotalIssuance`) appropriately.
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       *
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          newFree: Compact<u128> | AnyNumber | Uint8Array,
          newReserved: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>, Compact<u128>]
      >
      /**
       * Transfer some liquid free balance to another account.
       *
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       *
       * The dispatch origin for this call must be `Signed` by the transactor.
       *
       * ## Complexity
       * - Dependent on arguments but not critical, given proper implementations for input config
       * types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex
       * computation.
       *
       * Related functions:
       *
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
       * that the transfer will not kill the origin account.
       **/
      transfer: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >
      /**
       * Transfer the entire transferable balance from the caller account.
       *
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       *
       * The dispatch origin of this call must be Signed.
       *
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true). ## Complexity
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       **/
      transferAll: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          keepAlive: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, bool]
      >
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       *
       * 99% of the time you want [`transfer`] instead.
       *
       * [`transfer`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<
        (
          dest:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          value: Compact<u128> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Compact<u128>]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    baseFee: {
      setBaseFeePerGas: AugmentedSubmittable<
        (fee: U256 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [U256]
      >
      setElasticity: AugmentedSubmittable<
        (
          elasticity: Permill | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Permill]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    dynamicFee: {
      noteMinGasPriceTarget: AugmentedSubmittable<
        (
          target: U256 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [U256]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    ethereum: {
      /**
       * Transact an Ethereum transaction.
       **/
      transact: AugmentedSubmittable<
        (
          transaction:
            | EthereumTransactionTransactionV2
            | { Legacy: any }
            | { EIP2930: any }
            | { EIP1559: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [EthereumTransactionTransactionV2]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    evm: {
      /**
       * Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
       **/
      call: AugmentedSubmittable<
        (
          source: H160 | string | Uint8Array,
          target: H160 | string | Uint8Array,
          input: Bytes | string | Uint8Array,
          value: U256 | AnyNumber | Uint8Array,
          gasLimit: u64 | AnyNumber | Uint8Array,
          maxFeePerGas: U256 | AnyNumber | Uint8Array,
          maxPriorityFeePerGas:
            | Option<U256>
            | null
            | Uint8Array
            | U256
            | AnyNumber,
          nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
          accessList:
            | Vec<ITuple<[H160, Vec<H256>]>>
            | [
                H160 | string | Uint8Array,
                Vec<H256> | (H256 | string | Uint8Array)[]
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [
          H160,
          H160,
          Bytes,
          U256,
          u64,
          U256,
          Option<U256>,
          Option<U256>,
          Vec<ITuple<[H160, Vec<H256>]>>
        ]
      >
      /**
       * Issue an EVM create operation. This is similar to a contract creation transaction in
       * Ethereum.
       **/
      create: AugmentedSubmittable<
        (
          source: H160 | string | Uint8Array,
          init: Bytes | string | Uint8Array,
          value: U256 | AnyNumber | Uint8Array,
          gasLimit: u64 | AnyNumber | Uint8Array,
          maxFeePerGas: U256 | AnyNumber | Uint8Array,
          maxPriorityFeePerGas:
            | Option<U256>
            | null
            | Uint8Array
            | U256
            | AnyNumber,
          nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
          accessList:
            | Vec<ITuple<[H160, Vec<H256>]>>
            | [
                H160 | string | Uint8Array,
                Vec<H256> | (H256 | string | Uint8Array)[]
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [
          H160,
          Bytes,
          U256,
          u64,
          U256,
          Option<U256>,
          Option<U256>,
          Vec<ITuple<[H160, Vec<H256>]>>
        ]
      >
      /**
       * Issue an EVM create2 operation.
       **/
      create2: AugmentedSubmittable<
        (
          source: H160 | string | Uint8Array,
          init: Bytes | string | Uint8Array,
          salt: H256 | string | Uint8Array,
          value: U256 | AnyNumber | Uint8Array,
          gasLimit: u64 | AnyNumber | Uint8Array,
          maxFeePerGas: U256 | AnyNumber | Uint8Array,
          maxPriorityFeePerGas:
            | Option<U256>
            | null
            | Uint8Array
            | U256
            | AnyNumber,
          nonce: Option<U256> | null | Uint8Array | U256 | AnyNumber,
          accessList:
            | Vec<ITuple<[H160, Vec<H256>]>>
            | [
                H160 | string | Uint8Array,
                Vec<H256> | (H256 | string | Uint8Array)[]
              ][]
        ) => SubmittableExtrinsic<ApiType>,
        [
          H160,
          Bytes,
          H256,
          U256,
          u64,
          U256,
          Option<U256>,
          Option<U256>,
          Vec<ITuple<[H160, Vec<H256>]>>
        ]
      >
      /**
       * Withdraw balance from EVM into currency/balances pallet.
       **/
      withdraw: AugmentedSubmittable<
        (
          address: H160 | string | Uint8Array,
          value: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [H160, u128]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       *
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       *
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<
        (
          delay: u32 | AnyNumber | Uint8Array,
          bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u32, u32]
      >
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<
        (
          equivocationProof:
            | SpConsensusGrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          keyOwnerProof: SpCoreVoid | null
        ) => SubmittableExtrinsic<ApiType>,
        [SpConsensusGrandpaEquivocationProof, SpCoreVoid]
      >
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       *
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<
        (
          equivocationProof:
            | SpConsensusGrandpaEquivocationProof
            | { setId?: any; equivocation?: any }
            | string
            | Uint8Array,
          keyOwnerProof: SpCoreVoid | null
        ) => SubmittableExtrinsic<ApiType>,
        [SpConsensusGrandpaEquivocationProof, SpCoreVoid]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    hotfixSufficients: {
      /**
       * Increment `sufficients` for existing accounts having a nonzero `nonce` but zero `sufficients`, `consumers` and `providers` value.
       * This state was caused by a previous bug in EVM create account dispatchable.
       *
       * Any accounts in the input list not satisfying the above condition will remain unaffected.
       **/
      hotfixIncAccountSufficients: AugmentedSubmittable<
        (
          addresses: Vec<H160> | (H160 | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<H160>]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    luckyNumber: {
      /**
       * Buy a ticket to enter the lottery.
       *
       * This extrinsic acts as a passthrough function for `call`. In all
       * situations where `call` alone would succeed, this extrinsic should
       * succeed.
       *
       * If `call` is successful, then we will attempt to purchase a ticket,
       * which may fail silently. To detect success of a ticket purchase, you
       * should listen for the `TicketBought` event.
       *
       * This extrinsic must be called by a signed origin.
       **/
      buyTicket: AugmentedSubmittable<
        (
          number: u8 | AnyNumber | Uint8Array,
          amount: u128 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u8, u128]
      >
      claimReward: AugmentedSubmittable<
        (
          who: AccountId32 | string | Uint8Array,
          round: u32 | AnyNumber | Uint8Array,
          number: u8 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [AccountId32, u32, u8]
      >
      /**
       * Start a lottery using the provided configuration.
       *
       * This extrinsic must be called by the `ManagerOrigin`.
       *
       * Parameters:
       *
       * * `price`: The cost of a single ticket.
       * * `length`: How long the lottery should run for starting at the current block.
       * * `delay`: How long after the lottery end we should wait before picking a winner.
       * * `repeat`: If the lottery should repeat when completed.
       **/
      startLottery: AugmentedSubmittable<
        (
          minPrice: u128 | AnyNumber | Uint8Array,
          length: u32 | AnyNumber | Uint8Array,
          delay: u32 | AnyNumber | Uint8Array,
          rate: u8 | AnyNumber | Uint8Array,
          repeat: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [u128, u32, u32, u8, bool]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    managerCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       *
       * May be called by any signed account in order to finish voting and close the proposal.
       *
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       *
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       *
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       *
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       *
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<
        (
          proposalHash: H256 | string | Uint8Array,
          index: Compact<u32> | AnyNumber | Uint8Array,
          proposalWeightBound:
            | SpWeightsWeightV2Weight
            | { refTime?: any; proofSize?: any }
            | string
            | Uint8Array,
          lengthBound: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]
      >
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       *
       * May be called by any signed account in order to finish voting and close the proposal.
       *
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       *
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       *
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       *
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       *
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      closeOldWeight: AugmentedSubmittable<
        (
          proposalHash: H256 | string | Uint8Array,
          index: Compact<u32> | AnyNumber | Uint8Array,
          proposalWeightBound: Compact<u64> | AnyNumber | Uint8Array,
          lengthBound: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [H256, Compact<u32>, Compact<u64>, Compact<u32>]
      >
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       *
       * Must be called by the Root origin.
       *
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       *
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<
        (
          proposalHash: H256 | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [H256]
      >
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       *
       * Origin must be a member of the collective.
       *
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<
        (
          proposal: Call | IMethod | string | Uint8Array,
          lengthBound: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Call, Compact<u32>]
      >
      /**
       * Add a new proposal to either be voted on or executed directly.
       *
       * Requires the sender to be member.
       *
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       *
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<
        (
          threshold: Compact<u32> | AnyNumber | Uint8Array,
          proposal: Call | IMethod | string | Uint8Array,
          lengthBound: Compact<u32> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u32>, Call, Compact<u32>]
      >
      /**
       * Set the collective's membership.
       *
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       *
       * The dispatch of this call must be `SetMembersOrigin`.
       *
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       *
       * # WARNING:
       *
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       *
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<
        (
          newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
          prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
          oldCount: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<AccountId32>, Option<AccountId32>, u32]
      >
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       *
       * Requires the sender to be a member.
       *
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<
        (
          proposal: H256 | string | Uint8Array,
          index: Compact<u32> | AnyNumber | Uint8Array,
          approve: bool | boolean | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [H256, Compact<u32>, bool]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * ## Complexity
       * - O(1).
       **/
      setKey: AugmentedSubmittable<
        (
          updated:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress]
      >
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * ## Complexity
       * - O(1).
       **/
      sudo: AugmentedSubmittable<
        (
          call: Call | IMethod | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Call]
      >
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * ## Complexity
       * - O(1).
       **/
      sudoAs: AugmentedSubmittable<
        (
          who:
            | MultiAddress
            | { Id: any }
            | { Index: any }
            | { Raw: any }
            | { Address32: any }
            | { Address20: any }
            | string
            | Uint8Array,
          call: Call | IMethod | string | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [MultiAddress, Call]
      >
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       *
       * The dispatch origin for this call must be _Signed_.
       *
       * ## Complexity
       * - O(1).
       **/
      sudoUncheckedWeight: AugmentedSubmittable<
        (
          call: Call | IMethod | string | Uint8Array,
          weight:
            | SpWeightsWeightV2Weight
            | { refTime?: any; proofSize?: any }
            | string
            | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Call, SpWeightsWeightV2Weight]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    system: {
      /**
       * Kill all storage items with a key that starts with the given prefix.
       *
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<
        (
          prefix: Bytes | string | Uint8Array,
          subkeys: u32 | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Bytes, u32]
      >
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<
        (
          keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<Bytes>]
      >
      /**
       * Make some on-chain remark.
       *
       * ## Complexity
       * - `O(1)`
       **/
      remark: AugmentedSubmittable<
        (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<
        (remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >
      /**
       * Set the new runtime code.
       *
       * ## Complexity
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       **/
      setCode: AugmentedSubmittable<
        (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       *
       * ## Complexity
       * - `O(C)` where `C` length of `code`
       **/
      setCodeWithoutChecks: AugmentedSubmittable<
        (code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [Bytes]
      >
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<
        (pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
        [u64]
      >
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<
        (
          items:
            | Vec<ITuple<[Bytes, Bytes]>>
            | [Bytes | string | Uint8Array, Bytes | string | Uint8Array][]
        ) => SubmittableExtrinsic<ApiType>,
        [Vec<ITuple<[Bytes, Bytes]>>]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
    timestamp: {
      /**
       * Set the current time.
       *
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       *
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       *
       * The dispatch origin for this call must be `Inherent`.
       *
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<
        (
          now: Compact<u64> | AnyNumber | Uint8Array
        ) => SubmittableExtrinsic<ApiType>,
        [Compact<u64>]
      >
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>
    }
  } // AugmentedSubmittables
} // declare module
