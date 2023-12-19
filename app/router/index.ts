/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:22:12
 * @Description: 路由文件
 */
import dotenv from "dotenv"
dotenv.config()
import koaRouter from 'koa-router'
import IndexController from '../controller'
import IndexController2 from "../controller/index2"

const router = new koaRouter({ prefix: '/admin' })

router.get('/', IndexController)
router.get('/list', IndexController2)

export default router