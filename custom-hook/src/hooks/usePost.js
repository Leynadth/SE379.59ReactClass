import { useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3001/';

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${baseURL}${url}`, payload);
      setData(response.data);
    } catch (error) {
      console.error('An error occurred:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePost;
