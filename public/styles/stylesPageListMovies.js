import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 320px) {
    padding: 1rem .2rem;
  };

  @media screen and (min-width: 767px) {
    padding: 4rem .5rem; 
  };

  @media screen and (min-width: 1023px) {
    padding: 6rem 0 0 1.7rem; 
  };
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  margin-bottom: 1rem;

  @media screen and (max-width: 320px) {
    justify-content: flex-start;
    margin-bottom: .5rem;

    };

    @media screen and (min-width: 767px) {
      justify-content: flex-start;
      margin-bottom: 1.5rem;

  };

  @media screen and (min-width: 1023px) {
    justify-content: center;
    margin-bottom: 2.5rem;

  };

  li {

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
  }

`;

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 767px) {
      font-size: 2.5rem;
      margin: 2rem 0;
    };

    @media screen and (min-width: 1023px) {
      font-size: 3.5rem;
      margin: 3rem 0;
    };
`;


export const ContainerLoader = styled.div`
  margin: 12rem 0 12rem 2rem;

  @media screen and (max-width: 320px) {
    margin: 8rem 0 8rem 2rem;
    
  }

  @media screen and (min-width: 767px) {
    margin: 20rem 0 15rem 5rem;
    
  }

  @media screen and (min-width: 1023px) {
    margin: 20rem 0 18rem 5rem;
    
  }

  @media screen and (min-width: 1200px) {
    margin: 10rem 0 10rem 5rem;
    
  }
`;
