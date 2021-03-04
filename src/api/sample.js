import request from '@/utils/request'

export function getSampleData(params) {
  return request({
    url: '/sample/datas',
    method: 'get',
    params
  })
}
