import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import previous from "../utils/previous.png";

const TimeControlled = () => {
    const navigate = useNavigate();
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState(null);
    const [board, setBoard] = useState(Array(9).fill(""));
    const [count, setCount] = useState(0);
    const INITIAL_TIME = 30;
    const [timeX, setTimeX] = useState(INITIAL_TIME);
    const [timeO, setTimeO] = useState(INITIAL_TIME);
    const timerRef = useRef(null);

    useEffect(() => {
        if (winner) return;
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (turn === "X") {
                setTimeX(t => {
                    if (t <= 1) { clearInterval(timerRef.current); setWinner("O"); return 0; }
                    return t - 1;
                });
            } else {
                setTimeO(t => {
                    if (t <= 1) { clearInterval(timerRef.current); setWinner("X"); return 0; }
                    return t - 1;
                });
            }
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [turn, winner]);

    const handleClick = (index) => {
        if (!board[index] && !winner) {
            const newBoard = [...board];
            newBoard[index] = turn;
            setBoard(newBoard);
            setCount(count + 1);
            checkWinner(newBoard);
            setTurn(turn === "X" ? "O" : "X");
        }
    };

    const checkWinner = (board) => {
        const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
        for (let [a, b, c] of winConditions) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                clearInterval(timerRef.current);
                break;
            }
        }
    };

    const resetGame = () => {
        setWinner(null);
        setBoard(Array(9).fill(""));
        setTurn("X");
        setCount(0);
        setTimeX(INITIAL_TIME);
        setTimeO(INITIAL_TIME);
    };

    const formatTime = (seconds) => `${seconds}s`;
    
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-purple-200">
            <img src={previous} alt="Back" className="h-8 cursor-pointer  rounded-full md:absolute md:top-4 md:left-4" onClick={() => navigate("/")} />
            <div className="bg-purple-100 rounded-3xl w-full max-w-lg p-4">
                <h2 className="text-center text-purple-900 font-semibold text-xl md:text-2xl font-mono my-4">Time Controlled</h2>
                <div className="flex justify-around mb-4">
                    <div className={turn === "X" ? "font-bold text-purple-900 bg-white rounded-lg px-5 py-1" : "text-gray-700 rounded-lg px-5 py-1"}>X: {formatTime(timeX)}</div>
                    <div className={turn === "O" ? "font-bold text-purple-900 bg-white rounded-lg px-5 py-1" : "text-gray-700 rounded-lg px-5 py-1"}>O: {formatTime(timeO)}</div>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-purple-300 p-4 rounded-2xl">
                    {board.map((cell, index) => <div key={index} className="box border-2 text-2xl font-bold flex items-center justify-center h-20 sm:h-24 md:h-28 text-black" onClick={() => handleClick(index)}>{cell}</div>)}
                </div>
                <div className="text-center my-4">{winner ? `🎉 ${winner} Wins! 🎉` : count >= 9 ? "Game Draw!" : `${turn}'s Turn`}</div>
                <div className="flex justify-center">
                    <button onClick={resetGame} className="px-6 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-700">{winner || count >= 9 ? "Play Again" : "Reset"}</button>
                </div>
            </div>
        </div>
    );
};

export default TimeControlled;
