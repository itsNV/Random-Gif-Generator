import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "eDNYVbr6mW4Il0QynDUNKLqSWkDGR2LA";
const BASE_URL = "https://api.giphy.com/v1/gifs/random";

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(currentTag) {
    setLoading(true);
    const url = `${BASE_URL}?api_key=${API_KEY}${currentTag ? `&tag=${currentTag}` : ''}`;
    try {
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching GIF:", error);
      // Optionally, set a default/error GIF or state here
      setGif(''); // Clear previous gif or set to an error image
    }
    setLoading(false);
  }

  useEffect(() => {
    // Initial fetch, can be without a tag or with a default one
    fetchData(tag); 
  }, [tag]); // Refetch when tag changes

  return { gif, loading, fetchData };
};

export default useGif;
