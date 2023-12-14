/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-14 22:05:33
 * @Description: 日志文件
 */
import { configure, getLogger } from "log4js";
configure({
  appenders: {
    cheese: { type: "file", filename: "cheese.log" },
    access: { type: "file", filename: "access.log" }
  },
  categories: {
    default: { appenders: ["cheese"], level: "info" },
    access: { appenders: ["access"], level: "info" }
  },
});
export const accessLogger = getLogger('access')
export default getLogger()