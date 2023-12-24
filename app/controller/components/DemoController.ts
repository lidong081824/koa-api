/*
* @Author: andy
* @Email: andy.li@jingdigital.com
* @Date: 2023-12-23 18:51:44
* @Description: demo控制器组件
*/

import { Context, Next } from "koa"

const DemoController = (ctx: Context, next: Next) => {
  JSON.parse('{a=1}')
  ctx.body = {
    code: 0,
    data: 'DemoController',
  }
  ctx.headers["content-type"] = 'application/json'
  return next()
}
export default DemoController