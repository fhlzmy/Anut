import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login/login.do',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  debugger
  return request({
    url: '/api/user/info.do',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
