/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-17 10:51:34
 * @Description: 
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '...'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/main.js'),
    },
    port: 8081,
    open: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  mode: 'development',
  target: 'node'
}