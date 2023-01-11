import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import theme from './styles/index';
import { Container } from './global/styled.t';
import Carousel from './components/molecules/Carousel';
import Contrast from './components/organisms/Contrast';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Carousel />
        <Contrast />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
