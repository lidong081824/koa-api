## 介绍
这是一个平台线索相关的BFF;
## 开始使用
1.安装,请确保本地NODE环境>=18.0.0
  ```
  yarn
  ```
2.开发启动
  ```
  yarn add nodemon
  yarn run dev | staging | live
  ```
3.打包构建
  ```
  yarn add rollup
  yarn run autoBuild:dev | staging | master
  ```
## 项目结构
<pre>
├── app                       // app文件
│   ├── config                // 项目配置文件
│   ├── controller            // 接口定义文件
│   ├── logger                // 日志配置文件
│   ├── middleware            // 中间件文件
│   ├── router                // 路由文件
│   ├── test                  // 单元测试文件
│   ├── index.ts              // 主入口文件
├── logs                      // 打印日志内容文件
├── *.env                     // 构建的环境变量
├── .gitignore                // 用于Git配置不需要加入版本管理的文件
├── index.ts                  // 项目根入口文件
├── nodemon.json              // nodemon配置文件
├── package.json              // 项目配置文件
├── rollup.config.mjs         // rollup配置文件
├── tsconfig.json             // tsconfig默认配置文件
├── tsconfig.rollup.json      // rollup构建依赖的tsconfig配置文件
├── yarn.lock                 // 锁定安装依赖版本
</pre>


## 提问

## 变更记录
