/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useRouter } from 'next/router';
import useSWR from 'swr';

import Loader from '../../public/styles/stylesPageDetail';

import DetailsMovie from '../../components/DetailsMovie/index';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const MovieDetail = () => {
  const Router = useRouter();
  const { query } = Router;

  const BASE_API = 'https://www.omdbapi.com/?apikey=81ccd16a';

  const { data, error } = useSWR(`${BASE_API}&i=${query.movie}`, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!data) return <Loader>Cargando...</Loader>;

  return (


    <DetailsMovie
      {...data}
    />
  );
};

export default MovieDetail;
