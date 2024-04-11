

import React, { useState } from 'react';
import TakeUserName from './TakeUserName';
import previous from "../utils/previous.png"

const OnlineGameStarting = ({ name }) => {

    const [back, setBack] = useState(false)

    const goBack = () => {
        setBack(true)
    }

    if(back){
        return <TakeUserName/>
    }


    return (
        <div className="mx-auto flex justify-center w-svh min-h-svh bg-purple-200">
            <img src={previous} className='h-8 rounded-full my-3 mx-3 cursor-pointer' onClick={() => {goBack()}}></img>
            <div className="bg-purple-100 rounded-3xl h-max mx-auto w-1/2 my-14">
                <div className="my-10 text-center" >
                    <span className="text-purple-900 text-2xl font-mono">Host or Join a Game {name}</span><br></br>
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
            </div>
        </div>
    );
};

export default OnlineGameStarting;
