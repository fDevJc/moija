import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import Axios from 'axios';

const Home = () => {
  const [place, setPlace] = useState();
  const onSubmit = async (event) => {
    event.preventDefault();
    let form = {
      place: place,
    };
    const res = await Axios.post('http://localhost:3001/game', form);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setPlace(value);
  };
  return (
    <>
      <div>sns영역</div>
      <div>
        <Popup trigger={<button>경기 만들기</button>} modal nested>
          {(close) => (
            <>
              <form onSubmit={onSubmit}>
                <input type="text" name="wayGubn"></input>
                <br />
                <input type="text" onChange={onChange} value={place} />
                <br />
                <input type="text" name="date"></input>
                <br />
                <input type="text" name="time"></input>
                <br />
                <input type="submit" value="regit"></input>
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
