import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  height: 70vh;
  border-bottom: 2px solid #676550;

  @media screen and (min-width: 1025px) {
      height: 90vh;
  }
`;

export const PosterContainer = styled.div`

  img {
    position: absolute;
    height: 100%;
    z-index: -1;

    @media screen and (min-width: 1025px) {
      display: none;
  }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  height: 100%;

  h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    margin-bottom: .5rem;

    @media screen and (max-width: 320px) {
      font-size: 1.2rem;
      margin-bottom: .2rem;

  }

  @media screen and (min-width: 767px) {
      font-size: 2.5rem;
      margin-bottom: .5rem;

  }

  @media screen and (min-width: 1024px) {
      font-size: 3.4rem;
      margin-bottom: .8rem;

  }

    @media screen and (min-width: 1025px) {
      font-size: 3rem;
  }
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-bottom: .5rem;

    @media screen and (max-width: 320px) {
      font-size: .7rem;
      margin-bottom: .2rem;

  }

  @media screen and (min-width: 767px) {
      font-size: 1.5rem;
      margin-bottom: .5rem;

  }

  @media screen and (min-width: 1024px) {
      font-size: 2.4rem;
      margin-bottom: .8rem;

  }

    @media screen and (min-width: 1025px) {
      font-size: 2rem;
  }
  }

  h3 {
    margin-bottom: .5rem;
    font-size: 1.2rem;
    text-align: center;

    @media screen and (max-width: 320px) {
      font-size: .9rem;
      margin-bottom: .2rem;

  }

  @media screen and (min-width: 1024px) {
      font-size: 1.7rem;
      margin-bottom: .8rem;

  }

  @media screen and (min-width: 1024px) {
      font-size: 2.4rem;
      margin-bottom: .8rem;

  }

    @media screen and (min-width: 1025px) {
      font-size: 2.2rem;
      margin-bottom: 1rem;

  }
  }
`;
