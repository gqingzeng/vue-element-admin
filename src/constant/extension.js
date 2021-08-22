
import { constantToMap } from '@/utils'

const extensionStatusSourceMap = {
  0: {
    key: 'inactive',
    value: 0
  },
  1: {
    key: 'auditing',
    value: 1
  },
  2: {
    key: 'active',
    value: 2
  },
  3: {
    key: 'auditFailed',
    value: 3
  }
}

export const EXTENSION_STATUS = constantToMap(extensionStatusSourceMap)
