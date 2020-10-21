import styled from 'styled-components';

export const Container = styled.fieldset`
  display: flex;
  height: 100%;
  flex-direction: column;
  border: none;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  input {
    width: 100%;
    border: none;
    background: #585858;
    height: 2.5rem;
    border-radius: .4rem;
    padding-left: 1rem;
    outline-color: white;
    color: white;
    font-weight: 700;

    @media screen and (max-width: 767px) {
      font-size: 1rem;
      height: 2rem;
  }

    @media screen and (min-width: 767px) {
      font-size: 1.5rem;
      height: 4rem;
  }

  @media screen and (min-width: 1023px) {
      height: 5rem;
  }

    &::placeholder {
      color: #808080;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;

      @media screen and (max-width: 320px) {
        font-size: .4rem;
      }

      @media screen and (min-width: 767px) {
        font-size: 1rem;
    }

      @media screen and (min-width: 1023px) {
      font-size: 1.5rem;
  }

    }
  }

`;

export const Legend = styled.legend`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto 2rem;

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
    margin: 0 auto 1rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 2.5rem;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 3.5rem;
    margin: 0 auto 5rem;

  }

  @media screen and (min-width: 1200px) {
    font-size: 3.5rem;
    margin: 0 auto 2rem;

  }
`;

export const Href = styled.a`
  color: #808080;
  font-size: .8rem;
  font-weight: 700;
  margin-top: .5rem;

  @media screen and (min-width: 767px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 1.8rem;
  }
`;


export const Form = styled.form`
  padding: 9rem 2rem 0 2rem;
  height: 70vh;

  @media screen and (max-width: 320px) {
    padding: 3rem 2rem 0 2rem;
    height: 70vh;    
  }

  @media screen and (min-width: 767px) {
    padding: 12rem 4rem 0 4rem;
  }

  @media screen and (min-width: 1023px) {
    padding: 15rem 6rem 0 6rem;
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;
    padding: 8rem 10rem 0 10rem;
  }
  
`;

export const Form2 = styled.form`
  padding: 6rem 2rem 0 2rem;
  height: 70vh;

    @media screen and (max-width: 320px) {
    padding: 5rem 2rem 0 2rem;
    height: 70vh;    
  }

  @media screen and (min-width: 767px) {
    padding: 10rem 4rem 0 4rem;
  }

  @media screen and (min-width: 1023px) {
    padding: 15rem 6rem 0 6rem;
  }

  @media screen and (min-width: 1200px) {
    height: 100vh;
    padding: 8rem 10rem 0 10rem;
  }
`;
