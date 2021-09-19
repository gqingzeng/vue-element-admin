import { constantToMap, constantToList } from '@/utils'

const isDiffSoucrMap = {
  yes: {
    key: 1,
    name: 'yes'
  },
  no: {
    key: 0,
    name: 'no'
  }
}

export const IS_DIFF = constantToMap(isDiffSoucrMap)

export const IS_DIFF_LIST = constantToList(isDiffSoucrMap)
