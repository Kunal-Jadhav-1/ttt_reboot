import React, { useState } from 'react';
import OnlineGameStarting from './OnlineGameStarting';
import HomePage from './HomePage';
import previous from "../utils/previous.png"

const TakeUserName = () => {

    const [name , setName] = useState("");
    const [entered, setEntered] = useState(false)

    const nameChange = (event) => {
        setName(event.target.value)
    }

    const goForward = () => {
        if(name !== ""){
            setEntered(true)
        }
        
    }

    const [back, setBack] = useState(false)

    const goBack = () => {
        setBack(true)
    }

    if(back){
        return <HomePage/>
    }


    if(entered){
        return <OnlineGameStarting name={name}/>
    }


    return (
        <div className="mx-auto flex justify-center w-svh min-h-svh bg-purple-200">
            <img src={previous} className='h-8 rounded-full my-3 mx-3 cursor-pointer' onClick={() => {goBack()}}></img>
            <div className="bg-purple-100 rounded-3xl h-max mx-auto w-1/3 my-56 py-10">
                <div className="my-10 text-center" >
                    <span className="text-purple-900 text-2xl font-mono my-3">Please Enter Your Name</span><br></br>
                    <input type='text' value={name} className='text-xl font-mono text-purple-900 my-3 rounded-md px-2' onChange={(e) => nameChange(e)}></input><br></br>
                    <button className='font-mono text-purple-950 text-base rounded-md bg-purple-300 px-2 my-4 hover:shadow-md hover:shadow-purple-500' onClick={() => {goForward()}}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default TakeUserName;
