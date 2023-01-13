import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import theme from './styles/index';
import { Container } from './global/styled.t';
import Carousel from './components/molecules/Carousel';
import Contrast from './components/organisms/Contrast';
import { ModalProvider } from './context';
import PurchaseModal from './components/organisms/PurchaseModal';

function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Carousel />
          <Contrast />
          <Footer />
          <PurchaseModal />
        </Container>
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
