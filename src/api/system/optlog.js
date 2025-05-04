import request from '@/utils/request'

export function pageList(data) {
  return request({
    url: '/ucpm/optlog/page',
    method: 'get',
    params: data
  })
}
export function get(id) {
  return request({
    url: '/ucpm/optlog/' + id,
    method: 'get'
  })
}

export function del(id) {
  return request({
    url: '/ucpm/optlog/delete/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: '/ucpm/optlog/save',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/ucpm/optlog/update',
    method: 'put',
    data
  })
}
