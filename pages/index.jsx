import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'isomorphic-fetch';

import Layout from '../components/Layout/index';
import Hero from '../components/folderHome/Hero/index';
import PopularContainer from '../components/folderHome/PopularContainer/index';
import RecommendContainer from '../components/folderHome/RecommendContainer/index';
import ProgramsContainer from '../components/folderHome/ProgramsContainer/index';
import SerieContainer from '../components/folderHome/SerieContainer/index';
import NoLogin from '../components/folderHome/NoLogin/index';

// context
import { useStateFirebase } from '../firebase/context';

const Category = styled.h2`
  font-size: 1rem;
  margin: .2rem 1rem;
  font-weight: 700;

  @media screen and (max-width: 320px) {
  font-size: .6rem;
  font-weight: 700;
  
  };

  @media screen and (min-width: 767px) {
  font-size: 2rem;
  margin: 1rem 1.5rem;
  font-weight: 700;
  };

  @media screen and (min-width: 1023px) {
  font-size: 2.5rem;
  margin: 1.5rem 3.5rem;
  font-weight: 700;
  };

  @media screen and (min-width: 1200px) {

  };
`;

const Category1 = styled.h2`
  font-size: 1rem;
  margin: 0 1rem;
  font-weight: 700;

  @media screen and (max-width: 320px) {
  font-size: .6rem;
  margin: 5rem 0 .3rem .5rem;
  font-weight: 700;
  
  };

  @media screen and (min-width: 767px) {
  font-size: 2rem;
  margin: 1rem 1.5rem;
  font-weight: 700;
  };

  @media screen and (min-width: 1023px) {
  font-size: 2.5rem;
  margin: 1.5rem 3.5rem;
  font-weight: 700;
  };

  @media screen and (min-width: 1200px) {
  font-size: 2.5rem;
  margin: 15rem 0 2rem 3.5rem ;
  font-weight: 700;
  };
`;

const Home = ({ data }) => {
  // values context firebase
  const { user } = useStateFirebase();

  return (
    <Layout
      title="Colombia"
      description="El mejor lugar para encontrar las mejores películas y series de todos los tiempos"
      keywords="Películas, Movies, series"
    >
      {user
        ? (
          <>
            <Hero
        // eslint-disable-next-line react/jsx-props-no-spreading
              {...data}
            />
            <Category1>Populares</Category1>
            <PopularContainer />

            <Category>Recomendadas</Category>
            <RecommendContainer />

            <Category>Programas</Category>
            <ProgramsContainer />

            <Category>Elegida</Category>
            <SerieContainer />
          </>
        )
        : <NoLogin />}
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const BASE_API = 'https://www.omdbapi.com/?apikey=81ccd16a';
    const response = await fetch(`${BASE_API}&i=tt2705436`);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: `Error: ${error.message}`,
      },
    };
  }
}

Home.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.any,
  ).isRequired,
};

export default Home;
