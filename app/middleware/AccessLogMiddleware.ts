/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-14 22:13:08
 * @Description: 访问日志中间件
 */

import { Context, Next } from "koa";
import { accessLogger } from "../logger"

function AccessLogMiddleware(ctx: Context, next: Next) {
  const logStr = `path:${ctx.path} | method:${ctx.method} | ua:${ctx.headers['user-agent']}`
  accessLogger.info(logStr)
  return next();
}
export default AccessLogMiddleware