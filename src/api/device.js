
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

export function accountDelete(params) {
  return request({
    url: '/api/device/accountDelete',
    method: 'get',
    params
  })
}

export function deleteList(ids, data) {
  return request({
    url: `/api/device/deleteList/ids/${ids}`,
    method: 'delete',
    data
  })
}

export function addTimeSetmealIp(data) {
  return request({
    url: '/api/device/addTimeSetmealIp',
    method: 'post',
    data
  })
}

export function getAccountTimeList(params) {
  return request({
    url: '/api/device/accountTimeList',
    method: 'get',
    params
  })
}

