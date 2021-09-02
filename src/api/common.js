import request from '@/utils/request'

export const uploadAction = '/api/common/upload'
export function getArticle(params) {
  return request({
    url: '/api/common/article',
    method: 'get',
    params
  })
}

export function geetestStart(params) {
  return request({
    url: '/api/common/geetestStart',
    method: 'get',
    params
  })
}

export function geetestValibile(params) {
  return request({
    url: '/api/common/geetestValibile',
    method: 'get',
    params
  })
}

export function guideList(params) {
  return request({
    url: '/api/common/guideList',
    method: 'get',
    params
  })
}
