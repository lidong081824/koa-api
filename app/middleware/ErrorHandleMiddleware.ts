/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-19 21:17:30
 * @Description: .
 */

import { Context, Next } from "koa"
import { ErrorMsg } from "../interfaces"

const ErrorHandleMiddleware = async (ctx: Context, next: Next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    let result: ErrorMsg = {
      code: 10000,
      message: (error as Error).message
    }
    ctx.body = result
    ctx.type = 'application/json';
  }
}
export default ErrorHandleMiddleware
