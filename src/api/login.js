import request from '@/utils/request'

/**
 * 登录
 * @param {*} data
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息
 * @param {*} token
 */
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

/**
 * 登出
 */
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
