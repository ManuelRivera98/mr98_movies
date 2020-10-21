import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 5rem 1.5rem 2rem;

  @media screen and (max-width: 320px) {
    padding: 3rem 1rem 1rem;

  }

  @media screen and (min-width: 767px) {
    padding: 8rem 3rem 4rem;

  }

  @media screen and (min-width: 1023px) {
    padding: 10rem 4rem 5rem;

  }

  p {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: .5rem;

    @media screen and (max-width: 320px) {
      font-size: .7rem;
      margin-bottom: .3rem;
  }

  @media screen and (min-width: 767px) {
      font-size: 1.5rem;
      margin-bottom: 1rem;
  }

  @media screen and (min-width: 1023px) {
      font-size: 2rem;;
      margin-bottom: 1.5rem;
  }

  }

  span {
    font-weight: 300;
  }
`;

export const ContainerImg = styled.div`
  width: 10rem;
  height: 15rem;
  align-self: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 320px) {
    width: 8rem;
    height: 12rem;
    margin-bottom: .5rem;

  }

  @media screen and (min-width: 767px) {
    width: 15rem;
    height: 18rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 767px) {
    width: 20rem;
    height: 23rem;
    margin-bottom: 7rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 700;
  text-decoration: underline #d00f0f;
  font-size: 2rem;
  margin-bottom: 1rem;
  letter-spacing: 1.5px;

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin-bottom: .5rem;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;
    margin-bottom: 2rem;
    letter-spacing: 3px;
  }

  @media screen and (min-width: 1023px) {
    font-size: 4rem;
    margin-bottom: 2.5rem;
    letter-spacing: 3px;
  }
`;
