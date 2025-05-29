import React, { useState } from 'react';

import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY = "eDNYVbr6mW4Il0QynDUNKLqSWkDGR2LA";

const TagGif = () => {

    const [tag, setTag] = useState("");
    const {gif, loading, fetchData } = useGif(tag);

   


  return (
      <div className="flex flex-col items-center bg-gray-800 w-full lg:w-1/2 p-6 rounded-lg shadow-lg gap-4">
          <h2 className="text-2xl uppercase underline font-semibold text-center">Random {tag || 'GIF'}</h2>
      

      <div className="w-full h-64 flex items-center justify-center bg-gray-700 rounded-md overflow-hidden">
          {loading ? (
              <Spinner />
          ) : (
              <img src={gif} alt={`Random ${tag} GIF`} className="w-full h-full object-cover" />
          )}
      </div>

      <input
          type="text"
          name="tag"
          onChange={(event)=> setTag(event.target.value)}
          value={tag}
          placeholder="Search for a GIF..."
          className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out"
      />

      <button
          onClick={() => fetchData(tag)}
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 ease-in-out transform hover:scale-105 active:scale-95">
          Generate
      </button>


</div>
  )
}

export default TagGif