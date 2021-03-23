import axios from 'axios';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
const NewGamePopup = () => {
  const [gameGubn, setGameGubn] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();
    let form = {
      gameGubn,
      place,
      date,
      timeFrom,
      timeTo,
    };
    await axios.post('http://localhost:3001/game', form);
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
  return (
    <>
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
    </>
  );
};

export default NewGamePopup;
