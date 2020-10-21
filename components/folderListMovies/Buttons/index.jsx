import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { Button3 } from '../../../public/styles/stylesButtons';

const ShowButtons = ({ actualPage, allPages, handleClick }) => (
  <>
    { actualPage > 1 && (
    <Button3
      type="button"
      background="#d00f0f"
      color="white"
      height="2rem"
      width="7rem"
      font-size=".8rem"
      mRight=".2rem"
      onClick={() => handleClick('lastPage')}
    >
      &raquo; Anterior
    </Button3>
    )}
    { actualPage < allPages && (
    <Button3
      type="button"
      background="#d00f0f"
      color="white"
      height="2rem"
      width="7rem"
      font-size=".8rem"
      mLeft=".2rem"
      onClick={() => handleClick('nextPage')}
    >
      Siguiente &raquo;
    </Button3>
    )}
  </>
);

ShowButtons.propTypes = {
  actualPage: PropTypes.number.isRequired,
  allPages: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ShowButtons;
