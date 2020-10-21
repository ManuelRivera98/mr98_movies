import styled from 'styled-components';

const Loader = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 5rem;
  font-weight: bold;

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;
    padding: 10rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 4rem;
    padding: 15rem;
  }
`;

export default Loader;
