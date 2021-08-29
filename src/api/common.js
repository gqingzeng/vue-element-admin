import request from '@/utils/request'

export const uploadAction = '/api/common/upload'
export function getArticle(params) {
  return request({
    url: '/api/common/article',
    method: 'get',
    params
  })
}
