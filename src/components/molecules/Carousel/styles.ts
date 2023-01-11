import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: absolute;
  display: block;
  z-index: 0;
`;

export const Img = styled.img`
  width: 100%;
  display: flex;
  position: relative;
  height: 80vh;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ImgMob = styled.img`
display: none;
@media (max-width: 500px) {
display: flex;
border-radius: 0px 0px 0px 10px;
    top: 0;
    width: 100%;
    height: 500px;
}
`;

export const ImgTwo = styled.img`
  width: 100%;
  display: flex;
  position: relative;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  @media (max-width: 500px) {
    display: none;

  }
`;
export const ImgMobT = styled.img`
display: none;
@media (max-width: 500px) {
display: flex;
border-radius: 0px 0px 0px 10px;
    top: 0;
    width: 100%;
    height: 500px;
}
`;

export const Div = styled.div`
  position: relative;
  bottom: 10px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 500px) {
    background: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 280px;
    bottom: 280px;
    right: 0;
    border-radius: 0px 0px 0px 10px;
  }
`;

export const P = styled.p`
${({theme}) => css`

  position: absolute;
  display: flex;
  z-index: 9;
  color: ${theme.theme.colors.white};
  bottom: 180px;
  right: 25%;
  width: 400px;
  height: 100px;
  font-size: 15px;
  text-align: end;
  line-height: 155%;
  @media (max-width: 500px) {
    bottom: 100px;
    right: 50px;
    width: 300px;
  }  
  `}
`;

export const Title = styled.p`
${({theme}) => css`
  position: absolute;
  color: ${theme.theme.colors.white};
  bottom: 340px;
  right: 25%;
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 500px) {
    bottom: 250px;
    right: 50px;
    font-size: 25px;
  }
  `}
`;

export const Price = styled.span`
${({theme}) => css`
  position: absolute;
  color: ${theme.theme.colors.blue};
  bottom: 280px;
  right: 28%;
  font-size: 60px;
  font-weight: bold;
  @media (max-width: 500px) {
    bottom: 200px;
    right: 80px;
    font-size: 50px;
  }
  `}
`;
export const Price2 = styled.span`
${({theme}) => css`
  position: absolute;
  color: ${theme.theme.colors.blue};
  bottom: 315px;
  right: 25%;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 500px) {
    bottom: 225px;
    right: 50px;
  }
  `}
`;
export const BoxArrow = styled.div`
${({theme}) => css`
  position: absolute;
  background: ${theme.theme.colors.blue};
  bottom: 110px;
  right: 0px;
  width: 40px;
  height: 280px;
  z-index: 2;
  border-radius: 0px 0px 0px 10px;
  @media (max-width: 500px) {
    bottom: 0;
    width: 100%;
    height: 50px;
  }
  `}
`;
export const SubTitleOne = styled.p`
${({theme}) => css`
  position: absolute;
  display: flex;
  color: ${theme.theme.colors.white};
  bottom: 300px;
  right: -45px;
  font-size: 15px;
  transform: rotate(90deg);
  z-index: 7;
  @media (max-width: 500px) {
    transform: none;
    bottom: 15px;
    left: 10px;
  }
  `}
`;
export const SubTitleTwo = styled.p`
${({theme}) => css`
  position: absolute;
  display: flex;
  color: ${theme.theme.colors.white};
  bottom: 300px;
  right: -25px;
  font-size: 15px;
  transform: rotate(90deg);
  z-index: 6;
  @media (max-width: 500px) {
    transform: none;
    bottom: 15px;
    left: 10px;
  }
  `}
`;
export const Number = styled.p`
${({theme}) => css`
  position: absolute;
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  justify-content: center;
  text-align: center;
  color: ${theme.theme.colors.white};
  bottom: 110px;
  right: 0px;
  background: ${theme.theme.colors.darkblue};
  width: 40px;
  height: 70px;
  font-size: 15px;
  z-index: 6;
  border-radius: 0px 0px 0px 10px;
  @media (max-width: 500px) {
    bottom: 0;
    border-radius: 0;
    right: 0px;
    height: 50px;
    width: 150px;
    justify-content: flex-start;
    padding-left: 30px;
  }
  `}
`;

