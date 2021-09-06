import request from '@/utils/request'

export function aliyunCheck(data) {
  return request({
    url: '/api/aliyun/check',
    method: 'post',
    data
  })
}

export function aliyunSend(data) {
  return request({
    url: '/api/aliyun/send',
    method: 'post',
    data
  })
}

export function aliyunVerify(data) {
  return request({
    url: '/api/aliyun/verify',
    method: 'post',
    data
  })
}

export function aliyunResultInfor(data) {
  return request({
    url: '/api/aliyun/resultInfor',
    method: 'post',
    data,
    __tips: false
  })
}

export function aliyunVerifyOwner(data) {
  return request({
    url: '/api/aliyun/verifyOwner',
    method: 'post',
    data
  })
}
