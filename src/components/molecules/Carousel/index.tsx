import React from 'react';
import { Fade } from 'react-slideshow-image';
import image1 from '../../imgs/principal_banner_desktop.jpg';
import image2 from '../../imgs/principal_banner_desktop_02.jpg';
import image3 from '../../imgs/principal_banner_mobile.jpg';
import image4 from '../../imgs/principal_banner_mobile_02.jpg';
import '../../../styles/carrosel.css';

import {
  Container,
  Img,
  ImgMob,
  ImgMobT,
  ImgTwo,
  P,
  Title,
  Price,
  Price2,
  Div,
  BoxArrow,
  SubTitleOne,
  SubTitleTwo,
  Number,
} from './styles';
import 'react-slideshow-image/dist/styles.css';
const fadeImages = [image1, image2, image3, image4];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

function Carousel() {
  return (
    <Container>
      <Fade>
        <div className="each-fade">
          <Img src={fadeImages[0]} />
          <ImgMob src={fadeImages[2]} />

          <Div>
            <BoxArrow />

            <Title>MORTAL KOMBAT</Title>
            <SubTitleOne>MORTAL KOMBAT</SubTitleOne>
            <Number>1 / 2</Number>
            <Price>R$299</Price>
            <Price2>,99</Price2>
            <P>
              Mortal Kombat X combina uma apresentação cinemática
              única com uma jogabilidade totalmente nova. Os jogadores
              podem escolher pela primeira vez diversas variantes de
              cada personagem, afetando tanto a estratégia como o
              estilo de luta.
            </P>
          </Div>
        </div>
        <div className="each-fade">
          <ImgTwo src={fadeImages[1]} />
          <ImgMobT src={fadeImages[3]} />

          <Div>
            <BoxArrow />

            <SubTitleTwo>RED DEAD II</SubTitleTwo>
            <Number>2 / 2</Number>
          </Div>
        </div>
      </Fade>
    </Container>
  );
}

export default Carousel;
