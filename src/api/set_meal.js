import request from '@/utils/request'

export function userGuide(data) {
  return request({
    url: '/api/set_meal/userGuide',
    method: 'post',
    data
  })
}

export function recharge(data) {
  return request({
    url: '/api/set_meal/recharge',
    method: 'post',
    data
  })
}
