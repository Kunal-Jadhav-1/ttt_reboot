

import React, { useState } from 'react';

const OnlineGameStarting = () => {


    return (
        <div className="mx-auto flex justify-center w-svh min-h-svh bg-purple-200">
            <div className="bg-purple-100 rounded-3xl h-max mx-auto w-1/2 my-14">
                <div className="my-10 text-center" >
                    <h2 className="text-purple-900 text-2xl font-mono">Host or Join a Game</h2>
                </div>
                <div className=" relative bg-purple-300 h-max w-4/6 mx-auto rounded-2xl p-8 my-16 px-20">
                    <div className='font-mono text-xl text-center border-4 border-purple-200 p-2 rounded-md my-10'>
                        <span className='text-purple-900'>Create a Game</span><br></br>
                        <button className='font-mono text-purple-900 text-base rounded-md bg-purple-100 px-2 my-4 hover:shadow-md hover:shadow-purple-500'>Create</button>
                    </div>
                    <div className='font-mono text-xl text-center border-4 border-purple-200 p-2 rounded-md my-10'>
                        <span className='text-purple-900'>Join a Game</span><br></br>
                        <button className='font-mono text-purple-900 text-base rounded-md bg-purple-100 px-2 my-4 hover:shadow-md hover:shadow-purple-500'>Join</button>
                    </div>
                </div>

                <div className="px-10 font-sans text-center">

                </div>
            </div>
        </div>
    );
};

export default OnlineGameStarting;
