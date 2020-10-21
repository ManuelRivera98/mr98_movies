import React, { useState, useEffect } from 'react';

import ListCards from '../ListCards/index';

const PopularContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorF, setErrorF] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const BASE_API = 'https://www.omdbapi.com/?apikey=81ccd16a';
        const response = await fetch(`${BASE_API}&s=travel`);
        const res = await response.json();
        const { Search } = res;
        setData(Search);
        setLoading(false);
        setErrorF(null);
      } catch (error) {
        setLoading(false);
        setErrorF(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ListCards
      error={errorF}
      loading={loading}
      cards={data}
    />
  );
};

export default PopularContainer;
