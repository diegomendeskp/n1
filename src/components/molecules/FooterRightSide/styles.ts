import styled, { css } from 'styled-components';

export const Container = styled.div`
${({theme}) => css`
  padding: 28px;
  color: ${theme.theme.colors.white};
  `}
`;

export const P = styled.p`
  font-size: 12px;
`;