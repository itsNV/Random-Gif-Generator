import axios from "axios";
import { useState, useEffect } from "react";
const API_KEY = "eDNYVbr6mW4Il0QynDUNKLqSWkDGR2LA";

const useGif = (tag) => {
  const [gif, setGif] = useState("");

  async function fetchData(tag) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url); // we fatched {data} from whole API

    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchData('car');
  }, []);

    return { gif, fetchData };
};

export default useGif;
