import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 300px;
  height: 400px;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 20px;
  align-content: center;
  background: #ffffff;
  border-radius: 5px;
`;
export const Icon = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  align-content: center;
  bottom: -20px;
`;
export const P = styled.p`
  position: absolute;
  color: #084154;
  width: 50%;
  flex-wrap: wrap;
  text-align: center;
  font-weight: 300;
  line-height: 20px;
  font-size: 18px;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 1;
  background: #ffffff;
`;
export const Line = styled.div`
  position: absolute;
  width: 178%;
  height: 0;
  left: -110px;
  top: -40px;
  border: 1px solid #084154;
`;
export const Button = styled.button`
  position: absolute;
  top: -5px;
  right: 5px;
  border: none;
  background: #ffffff;
  cursor: pointer;
`;