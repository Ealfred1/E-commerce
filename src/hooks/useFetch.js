import { useState, useEffect } from 'react';
import axios from '../api/axios';

const useFetch = (url, route) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log('Fetched Data', response.data[route]);
      setData(response.data[route]); // Extract the tasks array from the response
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.log(err.response.data.error);
        setError(err.response.data.error);
      } else {
        console.log('Request Failed:', err.message);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
