import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  
  const { gif,fetchData } = useGif();  
  
  

  return (
    <div className="border-black flex flex-col items-center bg-blue-700 w-[450px] h-auto mt-[4rem] rounded-[10px]">
      <h2 className="mt-6 uppercase underline font-bold"> A Random Gif</h2>

      <div className="mt-[1rem]">
        <img src={gif} width={250} height={200} />
      </div>

      
      <button
        onClick={() => fetchData()}
        className="mt-5 mb-5 border-black rounded-lg bg-black w-[70%] text-slate-300 hover:text-white"
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
