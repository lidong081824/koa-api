/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 11:26:08
 * @Description: 访问日志中间件
 */

import { Context, Next } from "koa"
import { accessLogger } from '../logger'

const AccessLogMiddleware = (ctx: Context, next: Next) => {
  const accessStr = `--path=${ctx.path} --method=${ctx.method} --UA=${ctx.headers['user-agent']}`
  accessLogger.info(accessStr)
  return next();
}

export default AccessLogMiddleware