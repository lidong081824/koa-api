/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-12 21:29:26
 * @Description: .
 */
import run from './app'
import config from './app/config'
console.log(config)
run(config.server.port)