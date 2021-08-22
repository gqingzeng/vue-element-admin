import { constantToMap, constantToList } from '@/utils'

const rechTypeSourceMap = {
  WECHART: {
    key: 'WeChat',
    name: 'WeChat',
    icon: 'weixin'
  },
  ALIPAY: {
    key: 'Alipay',
    name: 'Alipay',
    icon: 'zhifubao1'
  },
  CDKEY: {
    key: 'CDKEY',
    name: 'CDKEY',
    icon: 'kami'
  }
}

export const RECH_TYPE = constantToMap(rechTypeSourceMap)

export const RECH_TYPE_LIST = constantToList(rechTypeSourceMap)
