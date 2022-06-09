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

  it('/bears/:id should return bear details of pooh bear ', async() => {
    const res = await request(app).get('/bears/1');
    expect(res.body).toEqual({
      'color': 'Yellow',
      'id': '1',
      'name': 'Pooh Bear',
      'type': 'Cartoon Bear',
      'will_eat_face': false,
      'cool_factor': '6'
    });
  });
  it('/bears/:id should return bear details of Pooh bear ', async() => {
    const res = await request(app).get('/bears/1');
    expect(res.body).toEqual({
      'color': 'Yellow',
      'id': '1',
      'name': 'Pooh Bear',
      'type': 'Cartoon Bear',
      'will_eat_face': false,
      'cool_factor': '6'
    });
  });
  it('/bears/:id should return bear details of Black bear ', async() => {
    const res = await request(app).get('/bears/2');
    expect(res.body).toEqual({
      'color': 'Black',
      'id': '2',
      'name': 'Black Bear',
      'type': 'Actual Bear',
      'will_eat_face': true,
      'cool_factor': '7'
    });
  });
  it('/bears/:id should return bear details of Brown bear ', async() => {
    const res = await request(app).get('/bears/3');
    expect(res.body).toEqual({
      'color': 'Brown',
      'id': '3',
      'name': 'Brown Bear',
      'type': 'Actual Bear',
      'will_eat_face': true,
      'cool_factor': '4'
    });
  });
  it('/bears/:id should return bear details of Grizzly bear ', async() => {
    const res = await request(app).get('/bears/4');
    expect(res.body).toEqual({
      'color': 'Brown',
      'id': '4',
      'name': 'Grizzly Bear',
      'type': 'Actual Terrifying Bear',
      'will_eat_face': true,
      'cool_factor': '8'
    });
  });
  it('/bears/:id should return bear details of Yogi bear ', async() => {
    const res = await request(app).get('/bears/5');
    expect(res.body).toEqual({
      'color': 'Brown',
      'id': '5',
      'name': 'Yogi Bear',
      'type': 'Cartoon Bear',
      'will_eat_face': false,
      'cool_factor': '3'
    });
  });
  it('/bears/:id should return bear details of Chicago bear ', async() => {
    const res = await request(app).get('/bears/6');
    expect(res.body).toEqual({
      'color': 'Orange',
      'id': '6',
      'name': 'Chicago Bear',
      'type': 'Football Player',
      'will_eat_face': false,
      'cool_factor': '2'
    });
  });
  
  afterAll(() => {
    pool.end();
  });
});
