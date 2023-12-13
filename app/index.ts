/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:21:50
 * @Description: .
 */
import Koa from 'koa'
import router from './router'
import { Server } from 'http'

const app = new Koa

app.use(router.routes())

const run = (port: string | number): Server => {
  return app.listen(port)
}

export default run