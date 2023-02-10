import React, { Fragment, useState } from "react";
import Square from "./Square";

const Board = () => {
  const [player, setPlayer] = useState(0);
  const [turn, setTurn] = useState(0);
  const [moves, setMoves] = useState([]);
  const [winner, setWinner] = useState("");
  const [isGameFinished, setisGameFinished] = useState(false);
  const squares = renderSquares();
  const winningCombinations = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  function renderSquares() {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(
        <Square
          key={i}
          _id={i}
          _callback={squareCallback}
          _isGameFinished={isGameFinished}
        />
      );
    }
    return squares;
  }

  function squareCallback(id) {
    if (winner !== "") return;
    const movePlayed = { player: player, position: id };
    const latestMoves = [...moves, movePlayed];
    const nextTurn = turn + 1;
    const nextPlayer = nextTurn % 2;
    checkForWinner(player, latestMoves);
    setMoves(latestMoves);
    setTurn(nextTurn);
    setPlayer(nextPlayer);
    return nextPlayer;
  }

  function checkForWinner(_player, _latestMoves) {
    const playerMoves = _latestMoves
      .filter((move) => move.player === _player)
      .map((player) => player.position);
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    if (playerMoves.length < 3) {
      return;
    } else if (playerMoves.length >= 5) {
      const winningPlayer = `Draw !`;
      setWinner(winningPlayer);
      setisGameFinished(true);
      return;
    } else {
      winningCombinations.forEach((win) => {
        const isFound = checker(win, playerMoves);
        if (isFound == true) {
          const winningPlayer = `Player ${_player} wins !`;
          setWinner(winningPlayer);
          setisGameFinished(true);
          return;
        }
      });
    }
  }

  return (
    <Fragment>
      <div className="board">
        {squares}
        <div className="message-board">
          {!isGameFinished && (
            <div className="message">
              Now playing: {player == 0 ? "Player 1" : "Player 2"}
            </div>
          )}
          {isGameFinished && (
            <button
              className="button-restart"
              onClick={() => location.reload()}
            >
              <div className="win-message">
                <div>{winner}</div>
                <div>Play again ?</div>
              </div>
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Board;
