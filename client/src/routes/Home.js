import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Axios from 'axios';

const Home = () => {
  const [teamGubn, setTeamGubn] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    let form = {
      teamGubn,
      place,
      date,
      timeFrom,
      timeTo,
    };
    const res = await Axios.post('http://localhost:3001/game', form);
  };
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    switch (name) {
      case 'teamGubn':
        setTeamGubn(value);
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
    }
  };
  const getTest = async (event) => {
    const res = await Axios.get('http://localhost:3001/game');
    console.log(res.data.payload);
  };
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
                    name="teamGubn"
                    onChange={onChange}
                    value={teamGubn}
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
      </div>
    </>
  );
};

export default Home;
