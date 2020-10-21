import React from 'react';
import Link from 'next/link';

import { Button } from '../../../public/styles/stylesButtons';
import { Section, PosterContainer, Container } from './styles';

const NoLogin = () => (

  <Section>
    <PosterContainer>
      <img src="https://cdn.pixabay.com/photo/2015/09/09/22/07/iron-man-933709_960_720.jpg" alt="Poster No Login" />
    </PosterContainer>
    <Container>
      <h1>Programas y películas sin límite y mucho más.</h1>
      <p>Disfruta donde quieras.Cancela en cualquier momento.</p>
      <h3>¿Quieres ver películas ya? Registrate, es gratis.</h3>
      <Link
        href="/register"
        passHref

      >
        <Button
          color="white"
          background="#d00f0f"
          width="10rem"
          height="2.5rem"
          font="1.2rem"
        >
          Registrate
        </Button>
      </Link>
    </Container>
  </Section>
);

export default NoLogin;
