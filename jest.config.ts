/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-24 14:01:54
 * @Description: jest配置文件
 */

// 安装了Jest Runner插件,快捷启动jest文件,解决无法获得NODE_ENV变量
process.env.NODE_ENV = 'dev';

module.exports = {
  "preset": "ts-jest"
}