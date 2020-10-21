import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  display: ${(props) => (props.display === 'true' ? 'flex;' : 'none;')};
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: calc(100vh - 90vh);
  left: 0;
  width: 60%;
  height: 30vh;
  background: black;
  border-top: 2px solid white;
  z-index: 3;

  @media screen and (min-width: 1200px) {
      top: 6rem;
      width: 40%;
      left: 10rem;

    }

  a {
    color: white;
    font-weight: 700;

    :hover {
      text-decoration: underline;
    }

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
`;

export default Nav;
