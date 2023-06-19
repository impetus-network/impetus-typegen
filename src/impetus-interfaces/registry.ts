// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry'

import type {
  EthbloomBloom,
  EthereumBlock,
  EthereumHeader,
  EthereumLog,
  EthereumReceiptEip658ReceiptData,
  EthereumReceiptReceiptV3,
  EthereumTransactionAccessListItem,
  EthereumTransactionEip1559Transaction,
  EthereumTransactionEip2930Transaction,
  EthereumTransactionLegacyTransaction,
  EthereumTransactionTransactionAction,
  EthereumTransactionTransactionSignature,
  EthereumTransactionTransactionV2,
  EthereumTypesHashH64,
  EvmCoreErrorExitError,
  EvmCoreErrorExitFatal,
  EvmCoreErrorExitReason,
  EvmCoreErrorExitRevert,
  EvmCoreErrorExitSucceed,
  FinalityGrandpaEquivocationPrecommit,
  FinalityGrandpaEquivocationPrevote,
  FinalityGrandpaPrecommit,
  FinalityGrandpaPrevote,
  FpRpcTransactionStatus,
  FrameSupportDispatchDispatchClass,
  FrameSupportDispatchDispatchInfo,
  FrameSupportDispatchPays,
  FrameSupportDispatchPerDispatchClassU32,
  FrameSupportDispatchPerDispatchClassWeight,
  FrameSupportDispatchPerDispatchClassWeightsPerClass,
  FrameSupportPalletId,
  FrameSupportTokensMiscBalanceStatus,
  FrameSystemAccountInfo,
  FrameSystemCall,
  FrameSystemError,
  FrameSystemEvent,
  FrameSystemEventRecord,
  FrameSystemExtensionsCheckGenesis,
  FrameSystemExtensionsCheckNonZeroSender,
  FrameSystemExtensionsCheckNonce,
  FrameSystemExtensionsCheckSpecVersion,
  FrameSystemExtensionsCheckTxVersion,
  FrameSystemExtensionsCheckWeight,
  FrameSystemLastRuntimeUpgradeInfo,
  FrameSystemLimitsBlockLength,
  FrameSystemLimitsBlockWeights,
  FrameSystemLimitsWeightsPerClass,
  FrameSystemPhase,
  FrontierTemplateRuntimeRuntime,
  PalletBalancesAccountData,
  PalletBalancesBalanceLock,
  PalletBalancesCall,
  PalletBalancesError,
  PalletBalancesEvent,
  PalletBalancesReasons,
  PalletBalancesReserveData,
  PalletBaseFeeCall,
  PalletBaseFeeEvent,
  PalletCollectiveCall,
  PalletCollectiveError,
  PalletCollectiveEvent,
  PalletCollectiveVotes,
  PalletDynamicFeeCall,
  PalletEthereumCall,
  PalletEthereumError,
  PalletEthereumEvent,
  PalletEvmCall,
  PalletEvmError,
  PalletEvmEvent,
  PalletGrandpaCall,
  PalletGrandpaError,
  PalletGrandpaEvent,
  PalletGrandpaStoredPendingChange,
  PalletGrandpaStoredState,
  PalletHotfixSufficientsCall,
  PalletHotfixSufficientsError,
  PalletLuckyNumberCall,
  PalletLuckyNumberError,
  PalletLuckyNumberEvent,
  PalletLuckyNumberLotteryConfig,
  PalletSudoCall,
  PalletSudoError,
  PalletSudoEvent,
  PalletTimestampCall,
  PalletTransactionPaymentChargeTransactionPayment,
  PalletTransactionPaymentEvent,
  PalletTransactionPaymentReleases,
  SpArithmeticArithmeticError,
  SpConsensusAuraSr25519AppSr25519Public,
  SpConsensusGrandpaAppPublic,
  SpConsensusGrandpaAppSignature,
  SpConsensusGrandpaEquivocation,
  SpConsensusGrandpaEquivocationProof,
  SpCoreEcdsaSignature,
  SpCoreEd25519Public,
  SpCoreEd25519Signature,
  SpCoreSr25519Public,
  SpCoreSr25519Signature,
  SpCoreVoid,
  SpRuntimeDigest,
  SpRuntimeDigestDigestItem,
  SpRuntimeDispatchError,
  SpRuntimeModuleError,
  SpRuntimeMultiSignature,
  SpRuntimeTokenError,
  SpRuntimeTransactionalError,
  SpVersionRuntimeVersion,
  SpWeightsRuntimeDbWeight,
  SpWeightsWeightV2Weight,
} from '@polkadot/types/lookup'

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    EthbloomBloom: EthbloomBloom
    EthereumBlock: EthereumBlock
    EthereumHeader: EthereumHeader
    EthereumLog: EthereumLog
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2
    EthereumTypesHashH64: EthereumTypesHashH64
    EvmCoreErrorExitError: EvmCoreErrorExitError
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal
    EvmCoreErrorExitReason: EvmCoreErrorExitReason
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit
    FinalityGrandpaPrevote: FinalityGrandpaPrevote
    FpRpcTransactionStatus: FpRpcTransactionStatus
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo
    FrameSupportDispatchPays: FrameSupportDispatchPays
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass
    FrameSupportPalletId: FrameSupportPalletId
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus
    FrameSystemAccountInfo: FrameSystemAccountInfo
    FrameSystemCall: FrameSystemCall
    FrameSystemError: FrameSystemError
    FrameSystemEvent: FrameSystemEvent
    FrameSystemEventRecord: FrameSystemEventRecord
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass
    FrameSystemPhase: FrameSystemPhase
    FrontierTemplateRuntimeRuntime: FrontierTemplateRuntimeRuntime
    PalletBalancesAccountData: PalletBalancesAccountData
    PalletBalancesBalanceLock: PalletBalancesBalanceLock
    PalletBalancesCall: PalletBalancesCall
    PalletBalancesError: PalletBalancesError
    PalletBalancesEvent: PalletBalancesEvent
    PalletBalancesReasons: PalletBalancesReasons
    PalletBalancesReserveData: PalletBalancesReserveData
    PalletBaseFeeCall: PalletBaseFeeCall
    PalletBaseFeeEvent: PalletBaseFeeEvent
    PalletCollectiveCall: PalletCollectiveCall
    PalletCollectiveError: PalletCollectiveError
    PalletCollectiveEvent: PalletCollectiveEvent
    PalletCollectiveVotes: PalletCollectiveVotes
    PalletDynamicFeeCall: PalletDynamicFeeCall
    PalletEthereumCall: PalletEthereumCall
    PalletEthereumError: PalletEthereumError
    PalletEthereumEvent: PalletEthereumEvent
    PalletEvmCall: PalletEvmCall
    PalletEvmError: PalletEvmError
    PalletEvmEvent: PalletEvmEvent
    PalletGrandpaCall: PalletGrandpaCall
    PalletGrandpaError: PalletGrandpaError
    PalletGrandpaEvent: PalletGrandpaEvent
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange
    PalletGrandpaStoredState: PalletGrandpaStoredState
    PalletHotfixSufficientsCall: PalletHotfixSufficientsCall
    PalletHotfixSufficientsError: PalletHotfixSufficientsError
    PalletLuckyNumberCall: PalletLuckyNumberCall
    PalletLuckyNumberError: PalletLuckyNumberError
    PalletLuckyNumberEvent: PalletLuckyNumberEvent
    PalletLuckyNumberLotteryConfig: PalletLuckyNumberLotteryConfig
    PalletSudoCall: PalletSudoCall
    PalletSudoError: PalletSudoError
    PalletSudoEvent: PalletSudoEvent
    PalletTimestampCall: PalletTimestampCall
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases
    SpArithmeticArithmeticError: SpArithmeticArithmeticError
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public
    SpConsensusGrandpaAppPublic: SpConsensusGrandpaAppPublic
    SpConsensusGrandpaAppSignature: SpConsensusGrandpaAppSignature
    SpConsensusGrandpaEquivocation: SpConsensusGrandpaEquivocation
    SpConsensusGrandpaEquivocationProof: SpConsensusGrandpaEquivocationProof
    SpCoreEcdsaSignature: SpCoreEcdsaSignature
    SpCoreEd25519Public: SpCoreEd25519Public
    SpCoreEd25519Signature: SpCoreEd25519Signature
    SpCoreSr25519Public: SpCoreSr25519Public
    SpCoreSr25519Signature: SpCoreSr25519Signature
    SpCoreVoid: SpCoreVoid
    SpRuntimeDigest: SpRuntimeDigest
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem
    SpRuntimeDispatchError: SpRuntimeDispatchError
    SpRuntimeModuleError: SpRuntimeModuleError
    SpRuntimeMultiSignature: SpRuntimeMultiSignature
    SpRuntimeTokenError: SpRuntimeTokenError
    SpRuntimeTransactionalError: SpRuntimeTransactionalError
    SpVersionRuntimeVersion: SpVersionRuntimeVersion
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight
  } // InterfaceTypes
} // declare module
