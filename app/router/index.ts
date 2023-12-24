/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:17:21
 * @Description: 路由文件
 */
import dotenv from "dotenv"
import koaRouter from 'koa-router'
import DemoRouter from "./components/DemoRouter"
import IndexRouter from "./components/IndexRouter"

// 加载各环境的配置文件
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

console.log(`当前服务器环境：${process.env.NODE_ENV}`)
console.log(`当前开发环境端口：${process.env.SERVER_PORT}`)
// 服务请求前缀
const router = new koaRouter({ prefix: '/api' })

DemoRouter(router)
IndexRouter(router)

export default router
