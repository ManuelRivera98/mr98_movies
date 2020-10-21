/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Link from 'next/link';

import Card from '../../Card/index';

const ListMovies = ({ data }) => (
  data.map((card, index) => (
    <li key={`${card.imdbID}${index}`}>
      <Link
        href={`/movie-detail/${card.imdbID}`}
      >
        <a>
          <Card
            height="100%"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...card}
          />
        </a>
      </Link>
    </li>
  ))
);

export default ListMovies;
