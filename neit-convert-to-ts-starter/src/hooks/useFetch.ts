import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../types/Product';

const baseURL = 'http://localhost:3000';

interface FetchResult {
  data: Product[] | null;
  loading: boolean;
  error: string;
}

export const useFetch = (url: string): FetchResult => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (err) {
        setError('Fetch failed'); 
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
