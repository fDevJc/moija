import React from 'react';

const GameGrid = ({ game }) => {
  return (
    <>
      <div>
        {game.game_gubn} , {game.place} , {game.date} , {game.timeFrom} ,{' '}
        {game.timeTo}
        <button>참가하기</button>
      </div>
    </>
  );
};

export default GameGrid;
