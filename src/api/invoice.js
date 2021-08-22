import request from '@/utils/request'

export function getUserCompanyInfo(params) {
  return request({
    url: '/api/invoice/userCompanyInfor',
    method: 'get',
    params
  })
}

export function getRechargeLog(params) {
  return request({
    url: '/api/invoice/rechargeLog',
    method: 'get',
    params
  })
}

export function updateCompanyInfor(data) {
  return request({
    url: '/api/invoice/updateCompanyInfor',
    method: 'put',
    data
  })
}

export function addCompanyInfor(data) {
  return request({
    url: '/api/invoice/addCompanyInfor',
    method: 'post',
    data
  })
}

export function addInvoice(data) {
  return request({
    url: '/api/invoice/addInvoice',
    method: 'post',
    data
  })
}

