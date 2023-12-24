'use strict';

var koa = require('koa');
var dotenv = require('dotenv');
var koaRouter = require('koa-router');
var log4js = require('log4js');

/*
* @Author: andy
* @Email: andy.li@jingdigital.com
* @Date: 2023-12-23 18:51:44
* @Description: demo控制器组件
*/
const DemoController = (ctx, next) => {
    // JSON.parse('{a=1}')
    ctx.body = {
        code: 0,
        data: 'DemoController',
    };
    ctx.headers["content-type"] = 'application/json';
    return next();
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-23 19:00:55
 * @Description: demo路由文件
 */
var DemoRouter = (router) => {
    // 拦截根路由, 根路由请求跟控制器
    router.get('/demo', DemoController);
};

/*
* @Author: andy
* @Email: andy.li@jingdigital.com
* @Date: 2023-12-23 18:51:44
* @Description: 跟控制器组件
*/
const IndexController = (ctx, next) => {
    ctx.body = {
        code: 0,
        data: 'hello koa',
    };
    ctx.headers["content-type"] = 'application/json';
    return next();
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-23 19:03:16
 * @Description: 根路由文件
 */
var IndexRouter = (router) => {
    // 拦截根路由, 根路由请求跟控制器
    router.get('/', IndexController);
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:17:21
 * @Description: 路由文件
 */
// 加载各环境的配置文件
dotenv.config({ path: `.env.${"dev"}` });
console.log(`当前服务器环境：${"dev"}`);
console.log(`当前开发环境端口：${process.env.SERVER_PORT}`);
// 服务请求前缀
const router = new koaRouter({ prefix: '/api' });
DemoRouter(router);
IndexRouter(router);

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:18:28
 * @Description: 配置文件
 */
const config = {
    server: {
        port: `${process.env.SERVER_PORT}`
    },
    log: {
        appenders: {
            cheese: { type: "file", filename: "logs/cheese.log" },
            access: {
                type: 'dateFile',
                filename: 'logs/access',
                pattern: 'yyyy-MM-dd hh.log',
                alwaysIncludePattern: true
            }
        },
        categories: {
            default: { appenders: ["cheese"], level: "info" },
            access: { appenders: ["access"], level: "info" }
        },
    }
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:17:08
 * @Description: 日志文件
 */
// 配置日志
log4js.configure(config.log);
// 导出访问日志配置,以便在调用处使用
const accessLogger = log4js.getLogger('access');
log4js.getLogger();

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 11:26:08
 * @Description: 访问日志中间件
 */
const AccessLogMiddleware = (ctx, next) => {
    const accessStr = `--path=${ctx.path} --method=${ctx.method} --UA=${ctx.headers['user-agent']}`;
    accessLogger.info(accessStr);
    return next();
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-19 13:13:55
 * @Description: 全局错误处理中间件
 */
const ErrorHandlingMiddleware = async (ctx, next) => {
    try {
        await next();
    }
    catch (error) {
        ctx.body = error.message;
    }
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:15:40
 * @Description: app文件
 */
const app = new koa();
app
    .use(ErrorHandlingMiddleware)
    .use(AccessLogMiddleware)
    .use(router.routes());
// 服务启动方法
const run = (port) => {
    return app.listen(port);
};

/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:18:59
 * @Description: 入口文件
 */
run(config.server.port);
