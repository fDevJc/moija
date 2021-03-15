const request = require('supertest');
const App = require('./app');
/*
describe('게임등록 테스트 /game', () => {
  it('post /game', async (done) => {
    const data = {
      teamGubn: 'team',
      place: 'jinju',
      date: '20210312',
      timeTo: '18:00',
      timeFrom: '20:00',
    };
    const response = await request(App).post('/game').send(data);
    expect(response.status).toEqual(200);

    done();
  });
});
*/
describe('게임등록 테스트 /game', () => {
  it('get /game', async () => {
    /*
    const response = await request(App).get('/game');
    console.log(response);
    expect(response.statusCode).toBe(200);
    */
    return request(App).get('/game').expect(200);
  });
});
