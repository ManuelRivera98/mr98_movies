/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
// Api router
import { useRouter } from 'next/router';
import { HeaderContainer, Logo } from './styles';
import {
  Button2, Button3, Button, Button4,
} from '../../../public/styles/stylesButtons';


// context firebase
import { useStateFirebase } from '../../../firebase/context';

import Search from '../Search/index';
import NavBar from '../NavBar/index';
import Profile from '../Profile/index';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // get pathname
  const Router = useRouter();
  const { pathname } = Router;
  const showBottomAndPrefetch = pathname === '/login';

  // values context firebase
  const { user } = useStateFirebase();

  const handleClick = (value) => {
    if (value === 'search') {
      return setShowSearch(!showSearch);
    }

    return setShowNav(!showNav);
  };

  return (
    <HeaderContainer
      isAuth={user}
    >
      <Link href="/" passHref>

        <Logo>
          <img src="/images/mr.png" alt="Logo" />
        </Logo>
      </Link>

      {user
        ? (
          <>
            {' '}
            <Button2
              type="button"
              background="transparent"
              grid="flex-start"
              onClick={() => handleClick('nav')}
              color="white"
            >
              Explorar  &#9662;
            </Button2>
            <NavBar
              showNav={showNav}
            />


            <Button4
              type="button"
              background="transparent"
              grid="flex-end"
              onClick={() => handleClick('search')}
            >
              <FaSearch size=".8rem" color="white" />
            </Button4>
            <Search showSearch={showSearch} setShowSearch={setShowSearch} />

            <Profile />
          </>
        )
        : (
          <Link
            href="/login"
            passHref
            prefetch={showBottomAndPrefetch && false}
          >

            <Button
              background="#d00f0f"
              color="white"
              display={showBottomAndPrefetch.toString()}

            >
              Iniciar Sesión
            </Button>
          </Link>
        )}

    </HeaderContainer>
  );
};

export default Header;
