import request from '../../utils/Request'


export function login({account, password}) {
  return request({
    url: 'client/login',
    method: 'post',
    data: {account, password}
  })
}

export function getUserInfo() {
  return request({
    url: 'client/getUserInfo',
    method: 'post',
  })
}

export function getRole() {
  return request({
    url: 'client/getRole',
    method: 'post',
  })
}
