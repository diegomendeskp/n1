import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 20px;
  align-content: center;
  z-index: 1;
`;
export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  max-width: 280px;
  height: 480px;
  text-align: center;
  position: relative;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  background-color: #f5f5f5;
`;

export const Img = styled.img`
  display: flex;
  width: 280px;
  height: 320px;
  background-color: silver;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid #3ec6e0;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 220px;
  gap: 5px;
`;
export const Name = styled.p`
  padding-top: 10px;
  display: flex;
  color: #084154;
  font-weight: bold;
  font-size: 12px;
`;
export const Price = styled.span`
  padding: 5px 0px;
  display: flex;
  color: #084154;
  font-weight: bold;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 3px;
  background-color: #3ec6e0;
  color: antiquewhite;
  font-size: 13px;
  font-weight: bold;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  width: 200px;
  height: 50px;
  text-transform: uppercase;
`;
export const SecundaryButton = styled(Button)`
  background-color: #084154;
  z-index: 0;
  padding-left: 20px;
  justify-content: flex-start;
`;

export const Mario = styled.img`
  display: flex;
  width: 60px;
  height: 70px;
  position: absolute;
  left: 170px;
  z-index: 1;
  bottom: 35px;
`;