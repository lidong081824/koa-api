/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-19 21:57:52
 * @Description: .
 */
/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:21:35
 * @Description: 控制器文件
 */
import { Context, Next } from 'koa'
import logger from '../logger'

const IndexController2 = (ctx: Context, next: Next) => {
  // JSON.parse('{3213232}')
  logger.info('321321', 321321)
  ctx.body = '321321321'
  next()
}
export default IndexController2