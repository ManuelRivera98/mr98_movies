import React from 'react';
import {
  FaInstagramSquare, FaFacebookSquare, FaGithubSquare, FaTwitterSquare,
} from 'react-icons/fa';

import { IconContext } from 'react-icons';
import { FooterContainer, MR, Ref } from './styles';


const Footer = () => (
  <FooterContainer>
    <IconContext.Provider
      value={{ size: '100%', color: '#808080' }}
    >
      <MR>
        <a href="https://www.facebook.com/profile.php?id=100005404813660" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="https://www.instagram.com/manuelr_0117/?hl=es-la" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="https://github.com/ManuelRivera98?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/Manuel_Rivera98" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>

      </MR>
      <Ref>
        <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDB</a>
        <a href="https://www.pexels.com/es-es/" target="_blank" rel="noopener noreferrer">Pexels</a>
        <a href="https://pixabay.com/es/" target="_blank" rel="noopener noreferrer">Pixabay</a>
        <a href="mailto: manuel.rivera1788@gmail.com">Creado por MR_98</a>
      </Ref>
    </IconContext.Provider>
  </FooterContainer>
);

export default Footer;
