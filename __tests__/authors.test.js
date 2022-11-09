const setup = require('../data/setup');
const app = require('../lib/app');
const pool = require('../lib/utils/pool');
const request = require('supertest');
// request needs to be from supertest and not from express

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(10);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(Number),
      pob: expect.any(String),
    });
  });
  test('/authors/:id', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(Number),
      pob: expect.any(String),
      books: expect.any(Array),
    });
  });
  afterAll(() => {
    pool.end;
  });
});
