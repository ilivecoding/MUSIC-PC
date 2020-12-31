import request from '../request.js';

// ! 国家编码列表
export function fetchCountryListApi() {
  return request({
    url: '/countries/code/list',
    method: 'get',
  })
}

// ! 检测手机号码是否已注册
export function checkPhoneExitApi(params) {
  return request({
    url: '/cellphone/existence/check',
    method: 'get',
    params:params
  })
}

// ! 手机登录
export function loginPhoneApi(params) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params:params
  })
}

// ! 退出登录
export function logoutApi() {
  return request({
    url: '/logout',
    method: 'get'
  })
}

// ! 获取创建的歌单
export function fetchUserPlayListAPi(params) {
  return request({
    url: '/user/playlist',
    method: 'get',
    params:params
  })
}