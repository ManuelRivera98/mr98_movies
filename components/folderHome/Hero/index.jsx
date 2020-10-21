import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import Router from 'next/router';
import { Button3 } from '../../../public/styles/stylesButtons';
import {
  PosterContainer, Section, H2, Description, ContainerItem, Rating,
} from './styles';


const Hero = ({
  Title, imdbRating, Plot, imdbID,
}) => (
  <Section>
    <PosterContainer>
      <img src="/images/hero.png" alt="Poster Hero" />
    </PosterContainer>
    <ContainerItem>
      <H2>
        {Title}
        {' '}
      </H2>
      <Rating>
        <span>⭑</span>
        {' '}
        {imdbRating}
      </Rating>
      <Description>{Plot}</Description>
      <Button3
        href="/"
        background="white"
        width="10rem"
        height="2rem"
        color="black"
        onClick={() => Router.push(`/movie-detail/${imdbID}`)}
      >
        <span
          css={css`
            font-size: 1rem;
            color: black;
            margin-right: .5rem;
            
            @media screen and (min-width: 767px) {
              font-size: 2rem;
            }
            `}
        >
          ▶
        </span>
        {' '}
        Ver
      </Button3>
    </ContainerItem>
  </Section>
);

Hero.propTypes = {
  Title: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export default Hero;
