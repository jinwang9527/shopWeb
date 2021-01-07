import request from '../../utils/Request'


export function obtainShortMessageVerification({phone}) {
  return request({
    url: 'client/obtainShortMessageVerification',
    method: 'post',
    data:{phone}
  })
}


export function register({clientName,phone,verificationCode,password}) {
  return request({
    url: 'client/register',
    method: 'post',
    data:{clientName,phone,verificationCode,password}
  })
}
