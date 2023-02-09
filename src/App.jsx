import { useState } from "react";
import Board from "./component/Board";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1>TicTacToe</h1> */}
      <Board />
    </div>
  );
}

export default App;
