import styled from 'styled-components';

const Item = styled.article`
  margin-right: .5rem;
  height: ${(props) => (props.height)};
  width: 150px;

  img {
    object-fit: cover;
    height: 100%;
  }

  @media screen and (max-width: 320px) {
    margin-right: .2rem;
    width: 100px;
  };

  @media screen and (min-width: 767px) {
    margin-right: 1rem;
    width: 230px;
  };

  @media screen and (min-width: 1023px) {
    margin-right: 2rem;
    width: 300px;
  };
`;

export default Item;
