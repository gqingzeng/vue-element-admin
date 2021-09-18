
import request from '@/utils/request'

export function getAccountList(params) {
  return request({
    url: '/api/device/accountList',
    method: 'get',
    params
  })
}
