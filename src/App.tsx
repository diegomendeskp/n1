import React from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import theme from './styles/index';
import { Container } from './global/styled.t';
import Carousel from './components/molecules/Carousel';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Carousel />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
