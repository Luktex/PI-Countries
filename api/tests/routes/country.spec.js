/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  alpha3Code: 'ARG',
  flag: 'lol',
  region: 'lel',
  capital: 'op'
};
const activity = {
  name: 'Bailar',
  difficulty: '1',
  duration: '1 dia',
  season: 'Verano',
  country: ['Argentina']
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries/ARG').expect(200)
    );
  });


});

describe('Activities routes post', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Activity.sync({ force: true }));
    
  describe('POST /activities', () => {
    it('Activity created successfully', () =>
      agent.post('/activity').send(activity).expect(200)
    );
  })
  });


