/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-19 13:13:55
 * @Description: 全局错误处理中间件
 */

import { Context, Next } from "koa"

const ErrorHandlingMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (error) {
    ctx.body = (error as Error).message
  }
}
export default ErrorHandlingMiddleware
