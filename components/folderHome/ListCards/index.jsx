/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Link from 'next/link';
// Component loading
import { BulletList } from 'react-content-loader';

import { List, Section, ContainerLoader } from './styles';


import Card from '../../Card/index';

const ListCards = ({ cards, loading, error }) => {
  if (loading) {
    return (
      <ContainerLoader>
        <BulletList height="100%" width="100%" />
      </ContainerLoader>
    );
  }

  if (error) return <h2>Hubo un error</h2>;

  return (
    <>
      {cards
        ? (
          <Section>
            <List>
              {cards.map((card, index) => (
                <li key={`${card.imdbID}${index}`}>
                  <Link
                    href={`/movie-detail/${card.imdbID}`}
                  >
                    <a>

                      <Card
                        height="initial"
                        {...card}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </List>
          </Section>
        )
        : <p>Cargando</p>}
    </>

  );
};
ListCards.defaultProps = {
  loading: false,
  error: null,
};

ListCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ListCards;
