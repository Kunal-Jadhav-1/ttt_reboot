import TicTacToe from './TicTacToe';
import OnlineGameStarting from './OnlineGameStarting';
import TakeUserName from './TakeUserName';
import React, { useState } from 'react';

const HomePage = () => {

  const [offline,setOffline] = useState(false);

  const playOffline = () => {
    setOffline(true);
    // console.log("click")
  }

  const [online,setOnline] = useState(false);

  const playOnline = () => {
    setOnline(true);
    console.log("click")
  }

  if(offline){
    return <TicTacToe/>
  }

  if(online){
    return <TakeUserName/>
  }

  return (
    <div className="mx-auto  justify-center items-center w-svh min-h-svh bg-purple-200 py-40">
      <div className='text-center font-mono font-extrabold text-5xl mb-40'>
        The Cooler Tic-Tac-Toe
      </div>
      <div className='flex flex-row'>
        <div className='mx-auto items-center bg-purple-100 px-10 rounded-lg  text-center cursor-pointer' >
          <span className='font-mono text-purple-900 text-3xl font-semibold my-4 '>Offline</span><br></br>
          <span className='font-mono text-purple-900 text-base my-4'>[Play Offline on your device with your friends]</span><br></br>
          <button onClick={() => playOffline()} className='font-mono text-purple-900 text-base rounded-md bg-purple-300 px-2 my-4 hover:shadow-md hover:shadow-purple-600'> Play </button>
        </div>
        <div className='mx-auto items-center bg-purple-100 px-10 rounded-lg text-center '>
          <span className='font-mono text-purple-900 text-3xl font-semibold mb-16'>Online</span><br></br>
          <span className='font-mono text-purple-900 text-base '>[Play Online with your friends on different devices]</span><br></br>
          <button onClick={() => playOnline()} className='font-mono text-purple-900 text-base rounded-md bg-purple-300 px-2 my-4 hover:shadow-md hover:shadow-purple-600'> Play </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
