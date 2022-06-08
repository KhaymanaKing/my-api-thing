const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Bear = require('../lib/models/bear');

describe('bears routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/bears should return a list of bears ', async () => {
    const res = await request(app).get('/bears');
    const bears = await Bear.getAll();
    const expected = bears.map((bear) => {
      return { id: bear.id, name: bear.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/bears/:id should return bear details', async() => {
    const res = await request(app).get('/bears/1');
    expect(res.body).toEqual({
      'color': 'Yellow',
      'id': '1',
      'name': 'Pooh Bear',
      'type': 'Cartoon',
      'will_eat_face': false,
      'cool_factor': '6'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
