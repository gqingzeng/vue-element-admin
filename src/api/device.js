
import request from '@/utils/request'

export function getAccountList(params) {
  return request({
    url: '/api/device/accountList',
    method: 'get',
    params
  })
}

export function accountAdd(data) {
  return request({
    url: '/api/device/accountAdd',
    method: 'post',
    data
  })
}

export function getUserSetMeal(params) {
  return request({
    url: '/api/device/userSetMeal',
    method: 'get',
    params
  })
}

