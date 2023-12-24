/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-23 19:03:16
 * @Description: 根路由文件
 */

import IndexController from '../../controller/components/IndexController'
import Router from 'koa-router'

export default (router: Router) => {
  // 拦截根路由, 根路由请求跟控制器
  router.get('/', IndexController)
}