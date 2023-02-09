import React, { Fragment, useState } from "react";

const Square = ({ _id, _callback, _isGameFinished }) => {
  const [player, setPlayer] = useState(2);
  const mark = ["X", "O", "+"];

  return (
    <Fragment>
      <button
        disabled={_isGameFinished}
        id={_id}
        className='square'
        onClick={() => {
          setPlayer(_callback(_id));
        }}>
        <span className={player === 0 ? "colorPlayer_1" : player === 1 ? "colorPlayer_2" : "colorInitial"}>{mark[player]}</span>
      </button>
    </Fragment>
  );
};

export default Square;
