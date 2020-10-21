import styled from 'styled-components';


export const Form = styled.form`
  display: ${(props) => (props.display === 'true' ? 'initial' : 'none')};
  position: absolute;
  z-index: 3;

  @media screen and (min-width: 767px) {
      position: initial;
      display: initial;

      }
`;

export const InputText = styled.input`
    padding: 1rem;
    min-width: 300px;
    border: none;
    border-radius: .5rem;
    outline: none;

    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
    }

      @media screen and (max-width: 320px) {
        min-width: 8rem;
        height: 2rem;

      }

      @media screen and (min-width: 767px) {
        min-width: 5rem;
        height: 2rem;

      }

      @media screen and (min-width: 1023px) {
        padding: 1..2rem;
        min-width: none;
        width: 15rem;
        height: 2.5rem;
      };

      @media screen and (min-width: 1200px) {
        padding: 1..2rem;
        min-width: 20rem;
        width: 15rem;
        height: 2.5rem;
      }

`;
export const InputSubmit = styled.input`
    height: 2rem;
    width: 2rem;
    display: block;
    background-size: 2rem;
    background-image: url('/images/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: .1rem;
    top: .5rem;
    background-color: white;
    border: none;
    text-indent: -9999px;
    border-radius: 1rem;


    @media screen and (max-width: 320px) {
      top: 0;
      right: .1rem;
      height: 1.7rem;
      border-radius: 1rem;

      }

      @media screen and (min-width: 767px) {
        height: 2rem;
        width: 2rem;
        display: block;
        background-size: 2rem;
        right: 12rem;
        top: 2.2rem;

      }

      @media screen and (min-width: 1023px) {
        height: 2rem;
        width: 2rem;
        display: block;
        background-size: 2rem;
        right: 18rem;
        top: 3rem;
      };

      @media screen and (min-width: 1200px) {
        height: 2rem;
        width: 2rem;
        display: block;
        background-size: 2rem;
        right: 21rem;
        top: 2.5rem;
      }

    &:hover {
        cursor: pointer;
    }
`;

export const Toggle = styled.button`
  display: ${(props) => (props.display ? props.display : 'initial')};
  position: absolute;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 700;
  top: 4rem;
  color: white;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 320px) {
    display: ${(props) => (props.display ? props.display : 'initial')};
    position: absolute;
    border: none;
    background: none;
    font-size: .5rem;
    font-weight: 700;
    top: 3rem;
    color: white;

      }

      @media screen and (min-width: 767px) {
        display: none;

      }

`;
