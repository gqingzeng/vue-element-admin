import { constantToMap, constantToKeyMap, constantToList } from '@/utils'

const proxyTypeSourceMap = {
  GLOBAL_DYNAMIC_HOUSE: {
    key: 0,
    name: 'globalDynamicHouse'
  },
  GLOBAL_STATIC_HOUSE: {
    key: 1,
    name: 'globalStaticHouse'
  },
  GLOBAL_COMPUTER_ROOM: {
    key: 2,
    name: 'globalComputerRoom'
  }
}

export const PROXY_TYPE = constantToMap(proxyTypeSourceMap)

export const PROXY_TYPE_MAP = constantToKeyMap(proxyTypeSourceMap)

export const PROXY_TYPE_LIST = constantToList(proxyTypeSourceMap)

const proxyStatusSourceMap = {
  FLOW: {
    key: 0,
    name: 'flow'
  },
  TIME: {
    key: 1,
    name: 'time'
  },
  IP_NUM: {
    key: 2,
    name: 'ipNum'
  }
}

export const PROXY_STATUS = constantToMap(proxyStatusSourceMap)

export const PROXY_STATUS_MAP = constantToKeyMap(proxyStatusSourceMap)

export const PROXY_STATUS_LIST = constantToList(proxyStatusSourceMap)

const proxyProtocolSourceMap = {
  HTTP: {
    key: 'HTTP',
    name: 'HTTP'
  },
  SOCKS5: {
    key: 'SOCKS5',
    name: 'SOCKS5'
  },
  HTTPS: {
    key: 'HTTPS',
    name: 'HTTPS'
  }
}

export const PROXY_PROTOCOL = constantToMap(proxyProtocolSourceMap)

export const PROXY_PROTOCOL_MAP = constantToKeyMap(proxyProtocolSourceMap)

export const PROXY_PROTOCOL_LIST = constantToList(proxyProtocolSourceMap)
