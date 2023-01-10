import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  color: antiquewhite;
  z-index: 1;
  @media (max-width: 500px) {
    height: 20%;
    
    padding-top: 5px;
  }
`;