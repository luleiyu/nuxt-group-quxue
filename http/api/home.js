// import { http } from '../request'
import QS from 'qs'
// console.log(http)
export function entryActivities (request, param) {
  param = QS.stringify(param)
  // console.dir(param)
  return request({
    url: '/studentAvtivity/entryActivities',
    method: 'post',
    data: param
  })
}
