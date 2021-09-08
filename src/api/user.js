import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function mobilelogin(data) {
  return request({
    url: '/api/user/mobilelogin',
    method: 'post',
    data
  })
}

export function thirdlogin(data) {
  return request({
    url: 'api/user/third',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/api/user/user_get_user_info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'get'
  })
}

export function getUserConsume(params) {
  return request({
    url: '/api/user/consume',
    method: 'get',
    params
  })
}

export function getUserRelist(params) {
  return request({
    url: '/api/user/relist',
    method: 'get',
    params
  })
}

export function sendSms(params) {
  return request({
    url: '/api/user/send_sms',
    method: 'get',
    params
  })
}

export function getThirdUrl(params) {
  return request({
    url: '/api/user/thirdUrl',
    method: 'get',
    params
  })
}

export function getAccountFlowList(params) {
  return request({
    url: '/api/user/account_flow_list',
    method: 'get',
    params
  })
}

export function wechatAliyun(data) {
  return request({
    url: '/api/user/wechatAliyun',
    method: 'post',
    data
  })
}

