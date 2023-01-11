import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 20px;
  align-content: center;
  z-index: 1;
`;

export const ImgCard = styled.img`
  display: flex;
  position: relative;
  max-width: 450px;
  max-height: 400px;
  text-align: center;

  background-color: #093846;
  
  @media (max-width: 500px) {
    max-width: 300px;
    max-height: 350px;
    z-index: 0;
  }
`;
export const Div = styled.div`
  position: relative;
  align-items: center;
`;
export const Text = styled.p`
  background: #3ec6e0;
  padding: 15px;
  font-size: 15px;
  border-left: 10px solid #084154;
  border-radius: 0 0 5px 5px;
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;
export const Line = styled.div`
  background: #084154;
  position: absolute;
  width: 130px;
  height: 1px;
  right: 10px;
  bottom: 23px;
  z-index: 1;
  @media (max-width: 500px) {
    bottom: 20px;
    width: 80px;
  }
`;