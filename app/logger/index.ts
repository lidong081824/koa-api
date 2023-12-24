/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:17:08
 * @Description: 日志文件
 */

import { configure, getLogger } from "log4js";
import config from "../config"

// 配置日志
configure(config.log)

// 导出访问日志配置,以便在调用处使用
export const accessLogger = getLogger('access')
export default getLogger()