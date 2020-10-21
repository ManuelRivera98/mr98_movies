import styled from 'styled-components';

export const Section = styled.section`
  overflow-y: hidden;
  overflow-x: auto;
  height: 220px;

  @media screen and (max-width: 320px) {
    height: 150px;
  };

  @media screen and (min-width: 767px) {
    height: 300px;
  };

  @media screen and (min-width: 1023px) {
    height: 400px;

  };
  
`;

export const List = styled.ul`
  display: inline-flex;
  height: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 320px) {
    padding: 0 .5rem;
  };

  @media screen and (min-width: 767px) {
    padding: 0 1.5rem;
  };

  @media screen and (min-width: 1023px) {
    padding: 0 3rem;
  };
  
`;

export const ContainerLoader = styled.div`
  padding: 0 1rem;
  height: 220px;
  width: 200px;
  
  @media screen and (max-width: 320px) {
    padding: 0 1rem;
    height: 200px;
    width: 150px;
  };

  @media screen and (min-width: 767px) {
    height: 220px;
    width: 220px;
  };

  @media screen and (min-width: 1023px) {
    height: 220px;
    width: 240px;
    margin-left: 2rem;
  };
`;
