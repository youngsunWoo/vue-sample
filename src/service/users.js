import request from '@/utils/request'

export function getUsers() {
  return request({
    url: '/users/',
    method: 'get',
  })
}

export function getUserById(id) {
  return request({
    url: '/users/'+id,
    method: 'get',
  })
}

export function insertUser(data) {
  return request({
    url: '/users/',
    method: 'post',
    data : data
  })
}