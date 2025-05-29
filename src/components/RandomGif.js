import React from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner"; // Assuming you have a Spinner component

const RandomGif = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col items-center bg-gray-800 w-full lg:w-1/2 p-6 rounded-lg shadow-lg gap-4">
      <h2 className="text-2xl uppercase underline font-semibold text-center">A Random GIF</h2>

      <div className="w-full h-64 flex items-center justify-center bg-gray-700 rounded-md overflow-hidden">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} alt="Random GIF" className="w-full h-full object-cover" />
        )}
      </div>

      <button
        onClick={() => fetchData()}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95"
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
