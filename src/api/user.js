import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
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
    url: '/vue-element-admin/user/logout',
    method: 'post'
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

