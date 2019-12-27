/* 合法的手机号 */
export function validatPhone (mobile) {
  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(mobile)
}
