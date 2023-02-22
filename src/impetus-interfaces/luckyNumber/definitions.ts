export default {
  types: {
    LotteryConfig: {
      minPrice: 'Balance',
      start: 'BlockNumber',
      length: 'BlockNumber',
      delay: 'BlockNumber',
      rate: 'u8',
      repeat: 'bool',
    },
  },
  rpc: {},
};
