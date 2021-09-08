import { constantToMap, constantToList } from '@/utils'

const proxyTypeSourceMap = {
  globalDynamicHouse: {
    key: 0,
    name: 'globalDynamicHouse'
  },
  globalStaticHouse: {
    key: 1,
    name: 'globalStaticHouse'
  },
  globalComputerRoom: {
    key: 2,
    name: 'globalComputerRoom'
  }
}

export const PROXY_TYPE = constantToMap(proxyTypeSourceMap)

export const PROXY_TYPE_LIST = constantToList(proxyTypeSourceMap)

const proxyStatusSourceMap = {
  flow: {
    key: 0,
    name: 'flow'
  },
  time: {
    key: 1,
    name: 'time'
  },
  ipNum: {
    key: 2,
    name: 'ipNum'
  }
}

export const PROXY_STATUS = constantToMap(proxyStatusSourceMap)

export const PROXY_STATUS_LIST = constantToList(proxyStatusSourceMap)
