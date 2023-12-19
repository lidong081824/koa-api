/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:21:35
 * @Description: 控制器文件
 */
import { Context, Next } from 'koa'
import logger from '../logger'

const IndexController = (ctx: Context, next: Next) => {
  JSON.parse('{321321}')
  logger.info('123', 123)
  ctx.body = [1, 2, 3, 4, 5]
  return next()
}
export default IndexController