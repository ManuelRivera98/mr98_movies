import styled from 'styled-components';

export const Div = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;

  @media screen and (max-width: 320px) {
    padding-right: .2rem;
  }

  @media screen and (min-width: 767px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1023px) {
    width: 80px;
    height: 80px;
  }
`;

export const Img = styled.img`
  height: 100%;
  border-radius: 25px;
  object-fit: cover;
  justify-self: flex-end;
  margin-left: .3rem;

  @media screen and (min-width: 1023px) {
    margin-left: 1.5rem;

  }

`;
