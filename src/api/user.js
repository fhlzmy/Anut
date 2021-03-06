import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login/login.do',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/api/user/register.do',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  debugger
  return request({
    url: '/api/user/info.do',
    method: 'post',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout.do',
    method: 'post'
  })
}
