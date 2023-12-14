/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:21:35
 * @Description: 控制器文件
 */
import { Context } from 'koa'
import logger from '../logger'
class IndexController {
  async index(ctx: Context) {
    logger.info('123', 123)
    ctx.body = [1, 2, 3, 4, 5]
  }
}
export default new IndexController