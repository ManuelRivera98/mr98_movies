import React, { useState } from 'react';

import { css } from 'styled-components';
import { Div, Img } from './styles';

import { useStateFirebase } from '../../../firebase/context';

import NavBarProfile from '../NavBarProfile/index';


const Profile = () => {
  const [showNav, setShowNav] = useState(false);

  const { user } = useStateFirebase();

  // data user
  let imgUser;
  if (user) {
    imgUser = user.photoURL;
  }


  return (
    <>
      <button
        css={css`
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
        `}
        type="button"
        onClick={() => setShowNav(!showNav)}
      >

        <Div>
          <Img src={imgUser} alt={`profile ${user.displayName}`} />
        </Div>
      </button>
      <NavBarProfile
        showNav={showNav}
      />
    </>
  );
};

export default Profile;
