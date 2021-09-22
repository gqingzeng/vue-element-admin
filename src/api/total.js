import request from '@/utils/request'

export function getMonthTotal(params) {
  return request({
    url: '/api/total/month',
    method: 'get',
    params
  })
}

export function getBaseTotal(params) {
  return request({
    url: '/api/total/base',
    method: 'get',
    params
  })
}
