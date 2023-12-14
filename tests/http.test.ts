/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-13 22:00:01
 * @Description: http单元测试
 */

import run from '../app'
import { Server } from 'http'
import request from 'supertest'
describe('http', () => {
  let server: Server
  beforeAll(() => {
    server = run(3000)
  })
  it('GET /admin', () => {
    return request(server)
      .get('/admin')
      // 测试请求状态
      .expect(200)
      // 测试返回
      .then(rs => {
        expect(rs.body).toStrictEqual([1, 2, 3, 4])
      })
  })
  // 关闭请求服务
  afterAll(async () => {
    server.close()
  })
})