import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Item from './styles';

const Card = ({ Poster, Title, height }) => (
  <Item
    height={height}
  >
    <img src={Poster} alt={`Card ${Title}`} />
  </Item>
);

Card.defaultProps = {
  Title: 'Item',
  height: '100%',
};

Card.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string,
  height: PropTypes.string,
};

export default Card;
