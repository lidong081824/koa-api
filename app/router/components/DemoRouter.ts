/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-23 19:00:55
 * @Description: demo路由文件
 */


import DemoController from "../../controller/components/DemoController"
import Router from "koa-router"

export default (router: Router) => {
  // 拦截根路由, 根路由请求跟控制器
  router.get('/demo', DemoController)
}