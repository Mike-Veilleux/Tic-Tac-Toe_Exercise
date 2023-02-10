import { useState } from "react";
import Board from "./component/Board";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default App;
