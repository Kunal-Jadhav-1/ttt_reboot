import React, { useState } from 'react';
import HomePage from './HomePage';
import previous from "../utils/previous.png"

const TicTacToe = () => {
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(''));
  const [count, setCount] = useState(null)
  const [logs, setLogs] = useState([])
  const [point, setPoint] = useState(null)

  const clearBlocks = () => {
    const newBoard = [...board]
    for(let m=0;m<newBoard.length;m++){
      if(logs.includes(m) === false){
        newBoard[m]=''
      }
    }
    console.log(newBoard)
    return newBoard
  };

  const handleClick = (index) => {
    if (!board[index] && !winner && count < 5) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setCount(count + 1)
      checkWinner(newBoard);
      const prevLogs = [...logs]
      prevLogs.push(index);
      setLogs(prevLogs);
      // console.log(count)
      console.log(logs)
      // console.log(board)
      setTurn(turn === 'X' ? 'O' : 'X');
    }
    else if (!board[index] && !winner && count >= 5) {
      const newBoard = clearBlocks();
      console.log(newBoard)
      
    
      const prevLogs = [...logs];
      prevLogs.shift(); 
      prevLogs.push(index);
      newBoard[index] = turn;
      setBoard(newBoard); 
      setPoint(logs[0])
      setLogs(prevLogs);
      checkWinner(newBoard);
      console.log(logs)
      // console.log(board)
      setTurn(turn === 'X' ? 'O' : 'X');
      if(count == 5){
        setCount(count+1)
      }
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
    setCount(null)
    setLogs([])
  };
  // console.log(count)
  const [back, setBack] = useState(false)

  const goBack = () => {
    setBack(true)
  }

  console.log("Count: ", count); 
  console.log("Point: ", point);
  console.log("logs: ", logs[0]);



  if (back) {
    return <HomePage />
  }


  return (
    <div className="mx-auto flex justify-center w-svh min-h-svh bg-purple-200">
      <img src={previous} className='h-8 rounded-full my-3 mx-3 cursor-pointer' onClick={() => { goBack() }}></img>
      <div className="my-4 bg-purple-100 rounded-3xl  min-h-svh mx-auto w-1/2">
        <div className="my-4 text-center" >
          <h2 className="text-purple-900 text-2xl font-mono font-medium">!! Connect 4 but in 3×3 grid !!</h2>
        </div>
        <div className="my-4 text-center" >
          {winner === null ? <div className="text-purple-100">//</div> : (<div>
            <span className="px-8 text-purple-900 text-2xl font-mono font-medium">======= {winner} Wins =======</span>
          </div>)}
        </div>
        <div className="container grid grid-cols-3 grid-rows-3 relative bg-purple-300 h-3/5 w-4/6 mx-auto rounded-2xl">
          {/* Box 0 */}
          {point==0 && count == 6 ? (
            <div
            key={0}
            className="box border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-2 border-t-0 border-l-0 text-red-600"
            onClick={() => handleClick(0)}
          >
            <span className="boxtext">{board[0]}</span>
          </div>
          ) : (
            <div
            key={0}
            className="box border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-2 border-t-0 border-l-0"
            onClick={() => handleClick(0)}
          >
            <span className="boxtext">{board[0]}</span>
          </div>
          )}

          {/* Box 1 */}
          {point==1 && count == 6 ? (
            <div
            key={1}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-t-0 text-red-600"
            onClick={() => handleClick(1)}
          >
            <span className="boxtext">{board[1]}</span>
          </div>

          ): (
            <div
            key={1}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-t-0"
            onClick={() => handleClick(1)}
          >
            <span className="boxtext">{board[1]}</span>
          </div>

          )}
          
          {/* Box 2 */}
          {point==2 && count == 6 ? (
            <div
            key={2}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-t-0 border-r-0 text-red-600"
            onClick={() => handleClick(2)}
          >
            <span className="boxtext">{board[2]}</span>
          </div>
          ) : (
            <div
            key={2}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-t-0 border-r-0"
            onClick={() => handleClick(2)}
          >
            <span className="boxtext">{board[2]}</span>
          </div>
          )}
          
          {/* Box 3 */}
          {point==3 && count == 6 ? (
            <div
            key={3}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-l-0 text-red-600"
            onClick={() => handleClick(3)}
          >
            <span className="boxtext">{board[3]}</span>
          </div>
          ) : (
            <div
            key={3}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-l-0"
            onClick={() => handleClick(3)}
          >
            <span className="boxtext">{board[3]}</span>
          </div>
          )}
          

          {/* Box 4 */}
          {point==4 && count == 6 ? (
            <div
            key={4}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center text-red-600"
            onClick={() => handleClick(4)}
          >
            <span className="boxtext">{board[4]}</span>
          </div>
          ) : (
            <div
            key={4}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center"
            onClick={() => handleClick(4)}
          >
            <span className="boxtext">{board[4]}</span>
          </div>
          )}
          

          {/* Box 5 */}
          {point==5 && count == 6 ? (
            <div
            key={5}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-r-0 text-red-600"
            onClick={() => handleClick(5)}
          >
            <span className="boxtext">{board[5]}</span>
          </div>
          ) : (
            <div
            key={5}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-r-0"
            onClick={() => handleClick(5)}
          >
            <span className="boxtext">{board[5]}</span>
          </div>
          )}
          

          {/* Box 6 */}
          {point==6 && count == 6 ? (
            <div
            key={6}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-l-0 border-b-0 text-red-600"
            onClick={() => handleClick(6)}
          >
            <span className="boxtext">{board[6]}</span>
          </div>
          ) : (
            <div
            key={6}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-l-0 border-b-0"
            onClick={() => handleClick(6)}
          >
            <span className="boxtext">{board[6]}</span>
          </div>
          )}
          

          {/* Box 7 */}
          {point==7 && count == 6 ? (
            <div
            key={7}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-b-0 text-red-600"
            onClick={() => handleClick(7)}
          >
            <span className="boxtext">{board[7]}</span>
          </div>
          ) : (
            <div
            key={7}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-b-0"
            onClick={() => handleClick(7)}
          >
            <span className="boxtext">{board[7]}</span>
          </div>
          )}
          

          {/* Box 8 */}
          {point==8 && count == 6 ? (
            <div
            key={8}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-b-0 border-r-0 text-red-600"
            onClick={() => handleClick(8)}
          >
            <span className="boxtext">{board[8]}</span>
          </div>
          ) : (
            <div
            key={8}
            className="box border-2 border-purple-900 text-2xl font-franklin cursor-pointer flex justify-center items-center border-b-0 border-r-0"
            onClick={() => handleClick(8)}
          >
            <span className="boxtext">{board[8]}</span>
          </div>
          ) }
          
        </div>

        <div className="px-10 font-sans text-center">
          {winner === null ? (<div>
            <span className="px-8 text-purple-900 text-2xl font-mono font-medium">{count < 9 ? (<div>{turn}'s Turn</div>) : (<div>Game Draw</div>)}</span>
          </div>) : (
            <div>
              <span className="text-purple-100 px-8 text-2xl font-mono font-medium">//</span></div>
          )}

          <div className="flex justify-center">
            <button id="reset" onClick={resetGame} className="flex p-2 m-3 rounded-2xl cursor-pointer border border-purple-200 bg-purple-500 text-purple-100" >{winner !== null || count >= 9 ? <span>Play Again</span> : <span>Reset</span>} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
