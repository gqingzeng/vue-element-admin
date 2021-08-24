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

export function aliyunVeriday(data) {
  return request({
    url: '/api/aliyun/veriday',
    method: 'post',
    data
  })
}
