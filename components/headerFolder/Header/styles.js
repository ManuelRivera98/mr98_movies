import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  display: grid;
  grid-template-columns: ${(props) => (props.isAuth ? '6rem 1fr 1fr 4rem' : '6rem 7rem')};
  justify-content: ${(props) => (props.isAuth ? 'initial' : 'space-between')};
  align-items: center;
  justify-items: center;
  height: calc(100vh - 90vh);
  width: 100%;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 320px) {
  position: absolute;
  display: grid;
  grid-template-columns: ${(props) => (props.isAuth ? '5rem 1fr 1fr 3rem' : '5rem 6rem')};
  justify-content: ${(props) => (props.isAuth ? 'initial' : 'space-between')};
  align-items: center;
  justify-items: center;
  height: calc(100vh - 90vh);
  }

  @media screen and (min-width: 767px) {
  position: absolute;
  display: grid;
  grid-template-columns: ${(props) => (props.isAuth ? '12rem 1fr 1fr 10rem' : '13rem 14rem')};
  justify-content: ${(props) => (props.isAuth ? 'initial' : 'space-between')};
  align-items: center;
  justify-items: center;
  height: calc(100vh - 90vh);
  }

  @media screen and (min-width: 1023px) {
  position: absolute;
  display: grid;
  grid-template-columns: ${(props) => (props.isAuth ? '17rem 1fr 1fr 16rem' : '19rem 21rem')};
  justify-content: ${(props) => (props.isAuth ? 'initial' : 'space-between')};
  align-items: center;
  justify-items: center;
  height: calc(100vh - 90vh);
  }
`;

export const Logo = styled.a`
  width: 100%;
  justify-self: flex-start;
`;
