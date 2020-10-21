import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import { List as ListContainer } from 'react-content-loader';
import {
  Section, List, H1, ContainerLoader,
} from '../../../public/styles/stylesPageListMovies';

import ListMovies from '../ListMovies/index';
import ShowButtons from '../Buttons/index';


const ContainerSection = ({
  movie, actualPage, allPages, data, handleClick, loading,
}) => {
  if (loading) {
    return (
      <ContainerLoader>
        <ListContainer />
      </ContainerLoader>
    );
  }
  return (
    <Section>
      <H1>
        Películas con
        {' '}
        {movie}
      </H1>
      <List>
        <ListMovies data={data} />
      </List>
      <div
        css={css`
        margin-top: .5rem;
        display: flex;
      `}
      >
        <ShowButtons actualPage={actualPage} allPages={allPages} handleClick={handleClick} />
      </div>
    </Section>
  );
};

ContainerSection.propTypes = {
  movie: PropTypes.string.isRequired,
  actualPage: PropTypes.number.isRequired,
  allPages: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ContainerSection;
