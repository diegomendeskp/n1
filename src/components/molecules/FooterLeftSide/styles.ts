import styled, { css } from 'styled-components';

export const Container = styled.div`
${({theme}) => css`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 10px;
  background-color: ${theme.theme.colors.darkblue};
  width: 22%;
  height: 100%;
  padding: 28px;
  `}
`;