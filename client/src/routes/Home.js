import React from 'react';
import Popup from 'reactjs-popup';
import Axios from 'axios';

const Home = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const res = await Axios.post('http://localhost:3001/game');

    console.log(res);
    /*
    fetch('http://localhost:3001/game')
      .then((res) => {
        console.log('submit regit');
      })
      .catch((err) => {
        console.log(err);
      });
      */
  };
  return (
    <>
      <div>sns영역</div>
      <div>
        <Popup trigger={<button>경기 만들기</button>} modal nested>
          {(close) => (
            <>
              <form onSubmit={onSubmit}>
                팀,개인<input type="text"></input>
                <br />
                장소<input type="text"></input>
                <br />
                일시<input type="text"></input>
                <br />
                시간<input type="text"></input>
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
