import styled from 'styled-components';

export const Button = styled.a`
    display: ${(props) => (props.display === 'true' ? 'none' : 'block')} ;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    background-color: ${(props) => (props.background)};
    color: ${(props) => (props.color)};
    border: none;
    padding: .5rem;
    border-radius: .4rem;
    width: ${(props) => (props.width ? props.width : 'initial')};
    height: ${(props) => (props.height ? props.height : 'initial')};
    font-size: ${(props) => (props.font ? props.font : '.7rem')};
    outline: none;

    &:last-of-type {
        margin-right:0;
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 320px) {
    width: initial;
    height: 1.5rem;
    font-size: .6rem;
    border-radius: .4rem;

  }

  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    width: 12rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    width: 18rem;
  }
`;

export const Button2 = styled.button`
    outline: none;
    display: ${(props) => (props.display === 'true' ? 'none' : 'block')} ;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    background-color: ${(props) => (props.background)};
    color: ${(props) => (props.color)};
    border: none;
    padding: .5rem;
    border-radius: .4rem;
    width: ${(props) => (props.width ? props.width : 'initial')};
    height: ${(props) => (props.height ? props.height : 'initial')};
    font-size: ${(props) => (props.font ? props.font : '.7rem')};


    &:last-of-type {
        margin-right:0;
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 320px) {
        width: initial;
        height: 1.5rem;
        font-size: .6rem;
        border-radius: .4rem;

  }

  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    width: 100%;
  }

  @media screen and (min-width: 1023px) {
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
  }
`;

export const Button3 = styled.button`
    outline: none;
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    text-align: center;
    background-color: ${(props) => (props.background)};
    color: ${(props) => (props.color)};
    justify-self: ${(props) => (props.grid ? props.grid : 'initial')};
    height: ${(props) => (props.height ? props.height : 'initial')};
    width: ${(props) => (props.width ? props.width : 'initial')};
    font-size: ${(props) => (props.font ? props.font : '.7rem')};
    border-radius: .4rem;
    margin-left: ${(props) => (props.mLeft ? props.mLeft : 'initial')};
    margin-right: ${(props) => (props.mRight ? props.mRight : 'initial')};


    &:last-of-type {
        margin-right:0;
    }

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 320px) {
        width: initial;    
        height: 1.5rem;
        font-size: .6rem;
        border-radius: .4rem;

  }

  @media screen and (min-width: 767px) {
    font-size: 1.5rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    width: 12rem;
  }

  @media screen and (min-width: 1023px) {
    font-size: 2rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    width: 18rem;
  }
`;

export const Button4 = styled.button`
    outline:none;
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    border: none;
    text-align: center;
    background-color: ${(props) => (props.background)};
    color: ${(props) => (props.color)};
    justify-self: ${(props) => (props.grid ? props.grid : 'initial')};
    height: ${(props) => (props.height ? props.height : 'initial')};
    width: ${(props) => (props.width ? props.width : 'initial')};
    font-size: ${(props) => (props.font ? props.font : '.7rem')};
    border-radius: .4rem;
    margin-left: ${(props) => (props.mLeft ? props.mLeft : 'initial')};
    margin-right: ${(props) => (props.mRight ? props.mRight : 'initial')};
    outline: none;


    &:last-of-type {
        margin-right:0;
    }

    &:hover {
        cursor: pointer;
    }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;
