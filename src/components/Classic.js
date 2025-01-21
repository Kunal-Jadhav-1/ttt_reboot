import React, { useState } from 'react';
import HomePage from './HomePage';
import previous from "../utils/previous.png";

const Classic = () => {
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(''));
  const [count, setCount] = useState(null);
  const [logs, setLogs] = useState([]);
  const [point, setPoint] = useState(null);

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setCount(count + 1);
      checkWinner(newBoard);
      const prevLogs = [...logs];
      prevLogs.push(index);
      setLogs(prevLogs);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  };

  const resetGame = () => {
    setWinner(null);
    setTurn('X');
    setBoard(Array(9).fill(''));
    setCount(null);
    setLogs([]);
  };

  const [back, setBack] = useState(false);

  const goBack = () => {
    setBack(true);
  };

  if (back) {
    return <HomePage />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-purple-200">
      <img
        src={previous}
        className="h-8 rounded-full my-3 cursor-pointer md:absolute md:top-4 md:left-4"
        onClick={goBack}
        alt="Go Back"
      />
      <div className="bg-purple-100 rounded-3xl w-full max-w-lg p-4">
        <h2 className="text-center text-purple-900 font-semibold text-xl md:text-2xl font-mono my-4">
          The Classic
        </h2>
        <div className="grid grid-cols-3 gap-2 bg-purple-300 p-4 rounded-2xl">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`box border-2 text-2xl font-bold flex items-center justify-center h-20 sm:h-24 md:h-28 ${point === index && count === 6 ? "text-red-600" : "text-black"
                }`}
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="text-center my-4">
          {winner ? (
            <div className="text-purple-900 text-xl font-medium">
              🎉 {winner} Wins! 🎉
            </div>
          ) : count >= 9 ? (
            <div className="text-purple-900 text-xl font-medium">Game Draw!</div>
          ) : (
            <div className="text-purple-900 text-xl font-medium">
              {turn}'s Turn
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={resetGame}
            className="px-6 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-700"
          >
            {winner || count >= 9 ? "Play Again" : "Reset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Classic;
