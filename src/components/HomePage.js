import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-purple-200 py-16 px-4 font-mono">
      <h1 className="text-4xl font-extrabold mb-16">The "Cooler" Tic-Tac-Toe</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        <div className="bg-purple-100 px-8 py-6 rounded-lg text-center cursor-pointer w-full md:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">The Classic</h2>
          <span className="font-mono text-purple-900 text-sm md:text-base block mb-4">
            [The good ole classic Tic-Tac-Toe]
          </span>
          <button
            onClick={() => navigate("/classic")}
            className="px-4 py-2 rounded bg-purple-300 hover:shadow-md"
          >
            Play
          </button>
        </div>

        <div className="bg-purple-100 px-8 py-6 rounded-lg text-center cursor-pointer w-full md:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">The Disappearer</h2>
          <span className="font-mono text-purple-900 text-sm md:text-base block mb-4">
            [Where did my X go?]
          </span>
          <button
            onClick={() => navigate("/disappearer")}
            className="px-4 py-2 rounded bg-purple-300 hover:shadow-md"
          >
            Play
          </button>
        </div>

        <div className="bg-purple-100 px-8 py-6 rounded-lg text-center cursor-pointer w-full md:w-[30%]">
          <h2 className="text-2xl font-semibold mb-2">The Timeout</h2>
          <span className="font-mono text-purple-950 text-sm md:text-base block mb-4">
            [Jaldi khel yaar]
          </span>
          <button
            onClick={() => navigate("/time")}
            className="px-4 py-2 rounded bg-purple-300 hover:shadow-md"
          >
            Play
          </button>
        </div>
      </div>

      {/* Online placeholder */}
      <div className="mt-16 bg-purple-300 px-8 py-6 rounded-lg text-center w-full md:w-[50%]">
        <h2 className="text-2xl font-semibold mb-2">Online</h2>
        <p>Play online with your friends</p>
        <p>(Coming Soon)</p>
      </div>
    </div>
  );
};

export default HomePage;
