import React from 'react';
import { useHistory } from 'react-router';

const GameGrid = ({ game }) => {
  const history = useHistory();
  const onClick = () => {
    //game detail
    history.push('/game/detail');
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
