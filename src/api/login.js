import service from '@/utils/request'
/**
 获取验证码的接口
 **/
export function GetSms(data){
  return service.request(
      {
        method: 'post',
        url: '/getSms/',
        data: data
      }
  )
}




/**
 * login
 **/




/**
 register
 **/
