import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3001/';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        console.error('An error occurred:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
