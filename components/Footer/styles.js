import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const MR = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;

  @media screen and (min-width: 1023px) {
    justify-content: flex-start;

    }
  
  a {
    width: 2rem;
    margin: .5rem 1rem;

    @media screen and (max-width: 320px) {
      width: 1.5rem;
      margin: .5rem 1rem;
    }

    @media screen and (min-width: 767px) {
      width: 4rem;
      margin: .7rem 1rem;
    }

    @media screen and (min-width: 1023px) {
      width: 6rem;
      margin: .7rem 2rem;
    }
  }
`;

export const Ref = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 1rem;
    margin: .7rem 0;
    font-weight: 700;
    color: #808080;

    @media screen and (max-width: 320px) {
      font-size: .6rem;
      margin: .7rem 0;
    }

    @media screen and (min-width: 767px) {
      font-size: 2rem;
      margin: 1.5rem 0;
    }

    @media screen and (min-width: 1023px) {
      font-size: 3rem;
      margin: 2rem 0;
    }
  }
`;
