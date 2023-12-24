/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:15:40
 * @Description: app文件
 */
import koa from 'koa'
import { Server } from 'http'
import router from './router'
import AccessLogMiddleware from './middleware/AccessLogMiddleware'
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware'

const app = new koa()

app
  .use(ErrorHandlingMiddleware)
  .use(AccessLogMiddleware)
  .use(router.routes())
  
// 服务启动方法
const run = (port: string | number): Server => {
  return app.listen(port)
}

export default run