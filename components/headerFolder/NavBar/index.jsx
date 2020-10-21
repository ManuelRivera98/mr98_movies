import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Nav from './styles';

const NavBar = ({ showNav }) => (
  <Nav
    display={showNav.toString()}
  >
    <a href="/">Inicio</a>
    <a href="/">Disponible en la versión 2.0</a>
    <a href="/">Disponible en la versión 2.0</a>
  </Nav>
);

NavBar.propTypes = {
  showNav: PropTypes.bool.isRequired,
};

export default NavBar;
