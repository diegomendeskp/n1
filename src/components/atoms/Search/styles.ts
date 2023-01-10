import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.img`
  width: 17px;
  height: 17px;
`;

export const P = styled.p`
  @media (max-width: 500px) {
    display: none;
  }
`;