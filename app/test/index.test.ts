/*
 * @Author: andy
 * @Email: andy.li@jingdigital.com
 * @Date: 2023-12-18 13:31:46
 * @Description: 单元测试文件 --建议安装vscode插件【Jest Runner】
 */
import { Server } from 'http';
import request from 'supertest';
import run from '../../app';
import config from "../../app/config";

describe('bff jest', () => {
  let server: Server
  beforeAll(() => {
    server = run(config.server.port)
  })
  it('/', async () => {
    const res = await request(server)
      .get('/api')
      .expect(200);
    expect(res.body)
      .toMatchObject({
        code: expect.any(Number),
        data: expect.any(String),
      });
  })
  afterAll(async () => {
    server.close()
  })
})