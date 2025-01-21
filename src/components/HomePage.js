import TicTacToe from './TicTacToe';
import TakeUserName from './TakeUserName';
import React, { useState } from 'react';
import Classic from './Classic';

const HomePage = () => {
  const [offline, setOffline] = useState(false);
  const [classic, setClassic] = useState(false);
  const [online, setOnline] = useState(false);

  const playOffline = () => setOffline(true);
  const playClassic = () => setClassic(true);
  const playOnline = () => {
    setOnline(true);
    console.log("click");
  };

  if (offline) return <TicTacToe />;
  if (classic) return <Classic />;
  if (online) return <TakeUserName />;

  return (
    <div className="mx-auto flex flex-col justify-center items-center w-screen min-h-screen bg-purple-200 py-16 px-4">
      <div className="text-center font-mono font-extrabold text-4xl md:text-5xl mb-16">
        The "Cooler" Tic-Tac-Toe
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        <div className="bg-purple-100 px-8 py-6 rounded-lg text-center cursor-pointer w-full md:w-[30%]">
          <span className="font-mono text-purple-900 text-2xl md:text-3xl font-semibold block mb-2">
            The Classic
          </span>
          <span className="font-mono text-purple-900 text-sm md:text-base block mb-4">
            [Your classic Tic-Tac-Toe]
          </span>
          <button
            onClick={playClassic}
            className="font-mono text-purple-900 text-sm md:text-base rounded-md bg-purple-300 px-4 py-2 hover:shadow-md hover:shadow-purple-600"
          >
            Play
          </button>
        </div>
        <div className="bg-purple-100 px-8 py-6 rounded-lg text-center cursor-pointer w-full md:w-[30%]">
          <span className="font-mono text-purple-900 text-2xl md:text-3xl font-semibold block mb-2">
            The Disappearer
          </span>
          <span className="font-mono text-purple-900 text-sm md:text-base block mb-4">
            [Where did my X go?]
          </span>
          <button
            onClick={playOffline}
            className="font-mono text-purple-900 text-sm md:text-base rounded-md bg-purple-300 px-4 py-2 hover:shadow-md hover:shadow-purple-600"
          >
            Play
          </button>
        </div>
        <div className="bg-purple-300 px-8 py-6 rounded-lg text-center w-full md:w-[30%]">
          <span className="font-mono text-purple-950 text-2xl md:text-3xl font-semibold block mb-2">
            The Timeout
          </span>
          <span className="font-mono text-purple-950 text-sm md:text-base block mb-4">
            [Can you win before your time runs out?]
          </span>
          <span className="font-mono text-purple-950 text-sm md:text-base">
            (Coming Soon)
          </span>
        </div>
      </div>
      <div className="mt-16 bg-purple-300 px-8 py-6 rounded-lg text-center w-full md:w-[50%]">
        <span className="font-mono text-purple-950 text-2xl md:text-3xl font-semibold block mb-2">
          Online
        </span>
        <span className="font-mono text-purple-950 text-sm md:text-base block">
          [Play Online with your friends online]
        </span>
        <span className="font-mono text-purple-950 text-sm md:text-base">
          (Coming Soon)
        </span>
      </div>
    </div>
  );
};

export default HomePage;
