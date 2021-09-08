import { constantToMap, constantToList } from '@/utils'

const rechTypeSourceMap = {
  WECHART: {
    key: 0,
    name: 'WeChat',
    icon: 'weixin'
  },
  ALIPAY: {
    key: 1,
    name: 'Alipay',
    icon: 'zhifubao1'
  },
  CDKEY: {
    key: 2,
    name: 'CDKEY',
    icon: 'kami'
  }
}

export const RECH_TYPE = constantToMap(rechTypeSourceMap)

export const RECH_TYPE_LIST = constantToList(rechTypeSourceMap)
