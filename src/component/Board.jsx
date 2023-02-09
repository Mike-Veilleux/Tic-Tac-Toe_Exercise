import React, { Fragment, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [message, setMessage] = useState("");
  const [player, setPlayer] = useState(0);
  const [turn, setTurn] = useState(0);
  const [moves, setMoves] = useState([]);
  const squares = renderSquares();

  function renderSquares() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(<Square key={i} _id={i} _callback={squareCallback} />);
    }
    return squares;
  }

  function squareCallback(id) {
    const nextTurn = turn + 1;

    setTurn(nextTurn);
    console.log("🚀 ~ file: Board.jsx:8 ~ Board ~ turn", turn);

    const nextPlayer = nextTurn % 2;
    setPlayer(nextPlayer);
    console.log("🚀 ~ file: Board.jsx:7 ~ Board ~ player", player);

    setMessage(`Fired ID: ${id}`);
    return nextPlayer;
  }
  return (
    <Fragment>
      <div className="board">
        {squares}
        <div className="message-board">
          <div className="message">
            Now playing: {player == 0 ? "Player 1" : "Player 2"}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
