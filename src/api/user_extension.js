
import request from '@/utils/request'

export function getExtensionInfo(params) {
  return request({
    url: '/api/user_extension/extensionInfor',
    method: 'get',
    params
  })
}

export function getExtensionTotal(params) {
  return request({
    url: '/api/user_extension/total',
    method: 'get',
    params
  })
}

export function getWithdayList(params) {
  return request({
    url: '/api/user_extension/withdayList',
    method: 'get',
    params
  })
}

export function userWithday(data) {
  return request({
    url: '/api/user_extension/user_withday',
    method: 'post',
    data
  })
}

export function getExtractableList(params) {
  return request({
    url: '/api/user_extension/extractableList',
    method: 'get',
    params
  })
}

