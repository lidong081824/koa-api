/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-21 22:23:55
 * @Description: rollup打包配置
 */

import typescript from "rollup-plugin-typescript2";
import replace from 'rollup-plugin-replace';

export default {
  input: './index.ts',
  output: {
    file: 'dist/bundle.cjs',
    format: 'cjs'
  },
  plugins: [
    typescript({ tsconfig: 'tsconfig.rollup.json' }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev') })
  ],
  external: ['koa', 'koa-router', 'log4js', 'dotenv']
}
