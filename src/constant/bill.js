import { constantToMap, constantToKeyMap, constantToList } from '@/utils'

const rechTypeSourceMap = {
  WECHART: {
    key: 'wechart',
    name: '微信',
    icon: 'weixin'
  },
  ALIPAY: {
    key: 'alipay',
    name: '支付宝',
    icon: 'zhifubao1'
  },
  CDKEY: {
    key: 'CDKEY',
    name: '卡密',
    icon: 'kami'
  }
}

export const RECH_TYPE = constantToMap(rechTypeSourceMap)

export const RECH_TYPE_MAP = constantToKeyMap(rechTypeSourceMap)

export const RECH_TYPE_LIST = constantToList(rechTypeSourceMap)
