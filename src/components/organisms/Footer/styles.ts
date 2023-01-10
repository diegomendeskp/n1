import styled, { css } from 'styled-components';

export const Container = styled.div`
${({theme}) => css`
  display: flex;
  bottom: 0;
  position: fixed;
  flex-direction: row;
  align-content: center;
  background-color: ${theme.theme.colors.blue};
  width: 100%;
  height: 70px;
  align-items: center;
  @media (max-width: 500px) {
  }  
`}
`;