import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Axios from 'axios';

const Home = () => {
  const [gameGubn, setGameGubn] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [games, setGames] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    let form = {
      gameGubn,
      place,
      date,
      timeFrom,
      timeTo,
    };
    await Axios.post('http://localhost:3001/game', form);
  };
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    switch (name) {
      case 'gameGubn':
        setGameGubn(value);
        break;
      case 'place':
        setPlace(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'timeFrom':
        setTimeFrom(value);
        break;
      case 'timeTo':
        setTimeTo(value);
        break;
      default:
        break;
    }
  };
  const getGames = async () => {
    const res = await Axios.get('http://localhost:3001/game');
    console.log('getGames');
    setGames(res.data.payload);
  };
  useEffect(() => {
    console.log('useEffect');
    getGames();
  }, []);
  const getTest = async (event) => {};
  return (
    <>
      <button onClick={getTest}>test</button>
      <div>sns영역</div>
      <div>
        <Popup trigger={<button>경기 만들기</button>} modal nested>
          {(close) => (
            <>
              <form onSubmit={onSubmit}>
                <div>
                  <input
                    type="text"
                    name="gameGubn"
                    onChange={onChange}
                    value={gameGubn}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="place"
                    onChange={onChange}
                    value={place}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="date"
                    onChange={onChange}
                    value={date}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="timeFrom"
                    onChange={onChange}
                    value={timeFrom}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="timeTo"
                    onChange={onChange}
                    value={timeTo}
                  />
                </div>

                <input type="submit"></input>
              </form>

              <button
                onClick={() => {
                  close();
                }}
              >
                close
              </button>
            </>
          )}
        </Popup>

        <div>경기 목록영역</div>
        <div style={{ backgroundColor: 'red' }}>
          {games.map((game) => {
            return (
              <div key={game.id}>
                {game.game_gubn} , {game.place} , {game.date} , {game.timeFrom}{' '}
                , {game.timeTo}
                <button>참가하기</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
