import request from '@/utils/request'

export function getIndexInfo(params) {
  return request({
    url: '/api/index/index',
    method: 'get',
    params
  })
}
