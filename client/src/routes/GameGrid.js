import React from 'react';

const GameGrid = ({ game }) => {
  const onClick = () => {
    //game detail
  };
  return (
    <>
      <div style={{ display: 'flex' }} onClick={onClick}>
        <div style={{ flex: 1 }}>{game.game_gubn}</div>
        <div style={{ flex: 1 }}>{game.place}</div>
        <div style={{ flex: 1 }}>{game.date}</div>
        <div style={{ flex: 1 }}>{game.timeFrom}</div>
        <div style={{ flex: 1 }}>{game.timeTo}</div>
      </div>
    </>
  );
};

export default GameGrid;
