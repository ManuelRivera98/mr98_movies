import React, { useState, useEffect } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';
import { Section, ContainerImg, H1 } from './styles';

import { useStateFirebase } from '../../firebase/context';

import Layout from '../Layout/index';

const DetailsMovie = ({
  Actors, Awards, Country, Director, Genre, Language, Plot, Poster, Year, Runtime,
  Title, Type, Writer, imdbRating,
}) => {
  const { user } = useStateFirebase();

  const Router = useRouter();

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
  return (
    <Layout
      title={Title}
      description={Plot}
      keywords={(Title, Actors, Director, Writer)}
    >

      <Section>
        <ContainerImg>
          <img src={Poster} alt={Title} />
        </ContainerImg>
        <H1>{Title}</H1>
        <div>
          <p>
            Año:
            {' '}
            <span>{Year}</span>
          </p>
          <p>
            Tipo:
            {' '}
            <span>{Type}</span>
          </p>
          <p>
            Duración:
            {' '}
            <span>{Runtime}</span>
          </p>
          <p>
            Lenguaje:
            {' '}
            <span>{Language}</span>
          </p>
          <p>
            Género:
            {' '}
            <span>{Genre}</span>
          </p>
          <p>
            País:
            {' '}
            <span>{Country}</span>
          </p>
          <p>
            Director:
            {' '}
            <span>{Director}</span>
          </p>
          <p>
            Escritor:
            {' '}
            <span>{Writer}</span>
          </p>
          <p>
            imdbRating:
            {' '}
            <span>{imdbRating}</span>
          </p>
        </div>
        <p>
          Premios:
          {' '}
          <span>{Awards}</span>
        </p>
        <p>
          Actores:
          {' '}
          <span>{Actors}</span>
        </p>
        <p>
          Trama:
          {' '}
          <span>{Plot}</span>
        </p>

      </Section>
    </Layout>
  );
};

DetailsMovie.defaultProps = {
  Actors: 'N/A',
  Plot: 'N/A',
  imdbRating: 'N/A',
  Director: 'N/A',
  Writer: 'N/A',
  Awards: 'N/A',
  Genre: 'N/A',
  Language: 'N/A',
  Poster: 'N/A',
  Year: 'N/A',
  Runtime: 'N/A',
  Title: 'N/A',
  Type: 'N/A',
  Country: 'N/A',
};


DetailsMovie.propTypes = {
  Actors: PropTypes.string,
  Plot: PropTypes.string,
  imdbRating: PropTypes.string,
  Director: PropTypes.string,
  Writer: PropTypes.string,
  Awards: PropTypes.string,
  Genre: PropTypes.string,
  Language: PropTypes.string,
  Poster: PropTypes.string,
  Year: PropTypes.string,
  Runtime: PropTypes.string,
  Title: PropTypes.string,
  Type: PropTypes.string,
  Country: PropTypes.string,
};

export default DetailsMovie;
