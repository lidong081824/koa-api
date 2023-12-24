/*
* @Author: andy
* @Email: andy.li@jingdigital.com
* @Date: 2023-12-23 18:51:44
* @Description: 跟控制器组件
*/

import { Context, Next } from "koa"

const IndexController = (ctx: Context, next: Next) => {
  ctx.body = {
    code: 0,
    data: 'hello koa',
  }
  ctx.headers["content-type"] = 'application/json'
  return next()
}
export default IndexController