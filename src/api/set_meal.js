import request from '@/utils/request'

export function userGuide(data) {
  return request({
    url: '/api/set_meal/userGuide',
    method: 'post',
    data
  })
}

export function getPackageSelect(data) {
  return request({
    url: '/api/set_meal/packageSelect',
    method: 'post',
    data
  })
}
