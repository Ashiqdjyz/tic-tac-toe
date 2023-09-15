import "./app1.css";
import Square from "./Square";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/react-logo";



function App() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [status, setStatus] = useState(null);
  function CheckWinners(squares) {
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < pattern.length; i++) {
      const [a, b, c] = pattern[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  const handleclick = (i) => {
    if (CheckWinners(square)) {
      return;
    }
    var y = isX ? "X" : "0";
    square.splice(i, 1, y);
    setSquare(square);
    setIsX(!isX);
    const winner = CheckWinners(square);
    if (winner) {
      setStatus(winner);
    }
    
  };
  return (
    <div className="gamecontainer">
     
      <div className="logo">
        <Lottie
          style={{ 'height': "100px" }}
          animationData={animationData}
          loop={true}
        />
      </div>
      <div className="rtside">
        <h2>
          {" "}
          <u>TIC TAC TOE</u>
        </h2>

        <div className="board">
          <div className="board-row">
            <Square
              value={square[0]}
              onClick={() => {
                handleclick(0);
              }}
            />
            <Square
              value={square[1]}
              onClick={() => {
                handleclick(1);
              }}
            />
            <Square
              value={square[2]}
              onClick={() => {
                handleclick(2);
              }}
            />
          </div>
          <div className="board-row">
            <Square
              value={square[3]}
              onClick={() => {
                handleclick(3);
              }}
            />
            <Square
              value={square[4]}
              onClick={() => {
                handleclick(4);
              }}
            />
            <Square
              value={square[5]}
              onClick={() => {
                handleclick(5);
              }}
            />
          </div>
          <div className="board-row">
            <Square value={square[6]} onClick={() => handleclick(6)} />
            <Square
              value={square[7]}
              onClick={() => {
                handleclick(7);
              }}
            />
            <Square
              value={square[8]}
              onClick={() => {
                handleclick(8);
              }}
            />
          </div>
          <div>
            {status ? (
              <h2>winner :"{status}"</h2>
            ) : (
              <h2>next player :{isX ? '"X"' : '"O"'}</h2>
            )}
            <button className="resetbtn"
              onClick={() => {
                setSquare(Array(9).fill(null))
                setStatus(null)
                setIsX(true)
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
