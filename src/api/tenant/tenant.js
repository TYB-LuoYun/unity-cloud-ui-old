import request from '@/utils/request'

export function pageList(data) {
  return request({
    url: '/ucpm/tenant/page',
    method: 'get',
    params: data
  })
}
export function get(id) {
  return request({
    url: '/ucpm/tenant/' + id,
    method: 'get'
  })
}

export function del(id) {
  return request({
    url: '/ucpm/tenant/delete/' + id,
    method: 'delete'
  })
}

export function add(data) {
  return request({
    url: '/ucpm/tenant/save',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: '/ucpm/tenant/edit',
    method: 'put',
    data
  })
}
