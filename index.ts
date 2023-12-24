/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 10:18:59
 * @Description: 入口文件
 */

import run from "./app";
import config from "./app/config";

run(config.server.port)