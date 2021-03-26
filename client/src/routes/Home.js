import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import GameGrid from '../components/GameGrid';
import NewGamePopup from '../components/NewGamePopup';

const Home = () => {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const res = await Axios.get('http://localhost:3001/game');
    setGames(res.data.payload);
  };
  useEffect(() => {
    getGames();
  }, []);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1 }}>sns 영역</div>
          <div style={{ flex: 1 }}>
            <button>sns등록</button>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>경기영역</div>
            <div style={{ flex: 1 }}>
              <NewGamePopup />
            </div>
          </div>
          <div>
            {games.map((game) => {
              return <GameGrid key={game.id} game={game} />;
            })}
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Home;
