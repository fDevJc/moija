const request = require('supertest');
const App = require('./app');

describe('게임등록 테스트 /game', () => {
  it('test', async (done) => {
    const data = {
      gameGubn: 'team',
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
