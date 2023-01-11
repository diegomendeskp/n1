import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 6;
`;
export const Button = styled.button`
${({theme}) => css`

  display: flex;
  font-size: 20px;
  border: none;
  outline: none;
  color: ${theme.theme.colors.white};
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  width: 25px;
  margin: 0;
  cursor: pointer;
  &:hover + Div {
    display: flex;
  }
  
  `}
`;
export const Div = styled.div`
${({theme}) => css`
display: none;
  margin-top: 60px;
  padding: 20px 10px;
  text-align: left;
  position: absolute;
  background: ${theme.theme.colors.darkblue};
  outline: 2px solid ${theme.theme.colors.blue};
  min-width: 160px;
  border-radius: 5px;
  box-shadow: 11px 11px ${theme.theme.colors.blue};
  z-index: 5;
  &:hover {
    display: flex;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    gap: 20px;
    box-shadow: none;
    border-radius: 0;
    padding: none;
    margin-top: none;
    outline: none;
    width: 100%;
    height: 100%;
    margin: 0;
    left: 0;
    top: 0;
    z-index: 5;
  }
`}
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0px 16px;
  text-align: left;
  display: block;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  li:not(:first-child) {
    margin-top: 6px;
    z-index: 1;
  }
`;

export const Link = styled.a`
${({theme}) => css`

  color: ${theme.theme.colors.white};
  text-decoration: none;
  font-size: 13px;
  padding: 10px 10px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
  &:hover {
    background: #3ec6e0;
    border-radius: 5px;
    border-width: 100%;
  }
  `}
`;

export const Span = styled.span`
${({theme}) => css`

  color: ${theme.theme.colors.white};
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 25px;
    padding: 10px 10px;
  }
  `}
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Square = styled.div`
${({theme}) => css`

  width: 0;
  height: 0;
  border-top: 18px solid ${theme.theme.colors.blue};
  border-left: 18px solid transparent;
  position: absolute;
  transform: rotate(-50deg);
  left: 15px;
  top: -10px;
  z-index: 0;
  @media (max-width: 500px) {
    display: none;
  }
  `}
`;

export const CloseBtn = styled.button`
  display: none;
  border: none;
  background: none;
  color: #ffffff;
  @media (max-width: 500px) {
    display: block;
    font-size: 30px;
    width: auto;
    cursor: pointer;
    &:hover Div {
      display: flex;
    }
    &:active  {
      background-color: black;
  
    }
  }
`;