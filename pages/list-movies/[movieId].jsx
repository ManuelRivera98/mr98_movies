import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import Layout from '../../components/Layout/index';
import ContainerSection from '../../components/folderListMovies/ContainerSection/index';

import { useStateFirebase } from '../../firebase/context';

const ListMovies = () => {
  // state component
  const [data, setData] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [allPages, setTotalPages] = useState(1);
  const [errorApi, setErrorApi] = useState(null);
  const [loading, setLoading] = useState(false);

  // obtener user
  const { user } = useStateFirebase();

  const Router = useRouter();
  const { query: { movieId } } = Router;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const BASE_API = 'https://www.omdbapi.com/?apikey=81ccd16a';
        const response = await fetch(`${BASE_API}&s=${movieId}&page=${actualPage}`);
        const result = await response.json();
        const { Search, totalResults } = result;

        setLoading(false);
        setTotalPages(Math.ceil(parseFloat(totalResults)));
        setErrorApi(null);
        setData(Search);
      } catch (error) {
        setLoading(false);
        setErrorApi(error.message);
      }
    };

    fetchData();
  }, [actualPage, movieId]);

  const handleClick = (type) => {
    if (type === 'lastPage') {
      if (actualPage === 1) return;
      setActualPage(actualPage - 1);
      return;
    }

    if (actualPage === allPages) return;

    setActualPage(actualPage + 1);
  };

  // Proteger página de usuarios no autenticados

  const [isAuth, setIsAuth] = useState(false);
  setTimeout(() => {
    if (!user) {
      setIsAuth(true);
    }
  }, 0);

  useEffect(() => {
    if (!user && isAuth) {
      Router.push('/');
    }
  }, [user]);

  if (!user) return null;

  if (errorApi) return <p>Algo anda mal, intenta de nuevo</p>;

  return (
    <Layout
      title={`movies-${movieId}`}
      description={`Las mejores películas de ${movieId} las encuentras acá`}
      keywords={`movies, series, ${movieId}`}
    >
      <ContainerSection
        movie={movieId}
        actualPage={actualPage}
        allPages={allPages}
        data={data}
        handleClick={handleClick}
        loading={loading}

      />
    </Layout>
  );
};

export default ListMovies;
