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
}
export default config