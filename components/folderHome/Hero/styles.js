import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  padding: 1rem;

  @media screen and (max-width: 320px) {
  padding: .5rem;

  }

  @media screen and (min-width: 767px) {
  padding: 1.5rem;

  }

  @media screen and (min-width: 1023px) {
    padding: 3rem;
  };

  @media screen and (min-width: 1200px) {
    padding: 20rem 0 0 3rem;
  }
`;

export const PosterContainer = styled.div`
  position: absolute;
  top: 12rem;
  object-fit: cover;
  z-index: -1;

  @media screen and (min-width: 767px) {
    top: 13rem;
  }

  @media screen and (min-width: 1023px) {
    top: 18rem;
  }

  @media screen and (min-width: 1200px) {
    top: 0;
  }
`;

export const ContainerItem = styled.div`
  width: 50%;

`;

export const H2 = styled.h2`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;

  @media screen and (max-width: 320px) {
    font-size: .8rem;

  }

  @media screen and (min-width: 767px) {
    font-size: 2rem;

  }

  @media screen and (min-width: 1023px) {
    font-size: 3rem;

  }

  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;

    }
`;

export const Rating = styled.span`
  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 320px) {
    font-size: 1.5rem;

  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;

  }

  @media screen and (min-width: 1023px) {
    font-size: 4rem;

  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;

    }
  
`;

export const Description = styled.p`
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 1.2rem;
    text-align: justify;

  }

  @media screen and (min-width: 1023px) {
    font-size: 2rem;
    text-align: start;

  }

  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;

    }
`;
