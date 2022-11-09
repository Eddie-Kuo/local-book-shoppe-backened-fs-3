const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  //test 1 should return a list of books and their properties tohaveproperty?
  test('/books returns a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(10);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released_year: expect.any(Number),
    });
  });
  afterAll(() => {
    pool.end();
  });
});

// expect(resp.body).toEqual({
//   id: expect.any(String),
//   name: expect.any(String),
//   authors: expect.any(Array),
// }); tests to see if the object returned has these properties
