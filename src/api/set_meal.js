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

export function buyBill(data) {
  return request({
    url: '/api/set_meal/buyBill',
    method: 'post',
    data
  })
}

export function buyNum(data) {
  return request({
    url: '/api/set_meal/buyNum',
    method: 'post',
    data
  })
}

export function buyTime(data) {
  return request({
    url: '/api/set_meal/buyTime',
    method: 'post',
    data
  })
}

export function setMealplaceOrder(data) {
  return request({
    url: '/api/set_meal/setMealplaceOrder',
    method: 'post',
    data
  })
}

export function renewOrder(data) {
  return request({
    url: '/api/set_meal/renewOrder',
    method: 'post',
    data
  })
}

