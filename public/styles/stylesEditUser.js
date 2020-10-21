import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75vh;

  @media screen and (min-width: 1200px) {
    height: 100vh;

  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    padding-top: 1rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;
    padding-top: 1rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 4rem;
    padding-top: 1rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
    padding-top: 3rem;

  }
`;

export const ContainerImg = styled.div`
  width: 10rem;
  height: 10rem;
  line-height: 50px;
  border-radius: 2rem;
  border: 3px solid #808080;

  @media screen and (min-width: 767px) {
    width: 15rem;
    height: 15rem;
  }

  @media screen and (min-width: 1023px) {
    width: 20rem;
    height: 20rem;
    border: 10px solid #808080;

  }
`;

export const Img = styled.img`
  height: 100%;
  border-radius: 2rem;
  object-fit: cover;
  justify-self: flex-end;

`;
