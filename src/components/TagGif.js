import React, { useState } from 'react'

import useGif from '../hooks/useGif';

const API_KEY = "eDNYVbr6mW4Il0QynDUNKLqSWkDGR2LA";

const TagGif = () => {

    const [tag, setTag] = useState("");
    const {gif, fetchData } = useGif(tag);

   


  return (
      <div>
          <div className='border-black flex flex-col items-center bg-red-600 w-[450px] h-auto mt-[4rem] rounded-[10px]'>
          
          
          <h2 className='mt-6 uppercase underline font-bold'>Random {tag} Gif</h2>
      

      <div className='mt-[1rem]'>
          <img src={gif} width={250} height={200} />
              </div>
              
              <input type="text" 
                  name="tag"
                  onChange={(event)=> setTag(event.target.value)}
                  value={tag}
                  
                 className='text-center mt-5 mb-5 border-black rounded-lg  bg-black w-[70%] text-white'
              />

              <button
                  onClick={() => fetchData(tag)}
                  className='mt-1 mb-5 border-black rounded-lg w-[70%]  bg-black text-slate-300 hover:text-white'>
          Generate
      </button>


</div>
    </div>
  )
}

export default TagGif