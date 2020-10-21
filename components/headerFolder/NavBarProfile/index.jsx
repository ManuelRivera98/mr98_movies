import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Link from 'next/link';
import { Nav, Button } from './styles';


import { useStateFirebase } from '../../../firebase/context';

const NavBarProfile = ({ showNav }) => {
  const { user: { displayName, uid }, firebase } = useStateFirebase();
  // unir nombres
  let userNameQuery;
  if (displayName !== null) {
    const userName = displayName.split(' ');
    userNameQuery = userName[1].concat(userName[0]);
  }

  const handleClick = async () => {
    try {
      await firebase.logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Nav
      display={showNav.toString()}
    >
      <h2>{displayName}</h2>
      <Link
        href={`/profile/edi/${uid}`}
        as={`/profile/edit/@${userNameQuery}`}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Cambiar avatar</a>
      </Link>
      <Button
        type="button"
        onClick={handleClick}

      >
        Cerrar sesión
      </Button>
    </Nav>
  );
};

NavBarProfile.propTypes = {
  showNav: PropTypes.bool.isRequired,
};

export default NavBarProfile;
