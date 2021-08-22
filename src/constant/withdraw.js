
import { constantToMap } from '@/utils'

const withdrawTypeSourceMap = {
  0: {
    key: 'balance',
    value: 0
  },
  1: {
    key: 'Alipay',
    value: 1
  }
}

export const WITHDRAW_TYPE = constantToMap(withdrawTypeSourceMap)

const withdrawStatusSourceMap = {
  0: {
    key: 'withdrawProgress',
    value: 0
  },
  1: {
    key: 'withdrawSuccess',
    value: 1
  }
}

export const WITHDRAW_STATUS = constantToMap(withdrawStatusSourceMap)
