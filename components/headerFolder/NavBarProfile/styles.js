import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  display: ${(props) => (props.display === 'true' ? 'flex;' : 'none;')};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: calc(100vh - 90vh);
  right: 0;
  width: 40%;
  height: 30vh;
  background: black;
  border-top: 2px solid white;
  z-index: 3;

  @media screen and (min-width: 1200px) {
      right: 5rem;
      width: 20%;
      top: 6rem;

    }

  a {
    color: white;
    font-weight: 700;

    @media screen and (max-width: 320px) {
    font-size: .5rem;

  }

    @media screen and (min-width: 767px) {
      font-size: 1.5rem;

    }

    @media screen and (min-width: 1023px) {
      font-size: 2rem;

    }

    @media screen and (min-width: 1200px) {
      font-size: 1rem;

    }
  }

  h2 {
    color: white;
    font-weight: 700;
    font-size: 1rem;
    color: #d00f0f;

    @media screen and (max-width: 320px) {
    font-size: .5rem;

  }

    @media screen and (min-width: 767px) {
      font-size: 1.5rem;

    }

    @media screen and (min-width: 1023px) {
      font-size: 2rem;

    }

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;

    }
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: white;
  font-weight: 700;

  @media screen and (max-width: 320px) {
    font-size: .5rem;

  }

    @media screen and (min-width: 767px) {
      font-size: 1.5rem;

    }

    @media screen and (min-width: 1023px) {
      font-size: 2rem;

    }

    @media screen and (min-width: 1200px) {
      font-size: 1rem;

    }
`;
