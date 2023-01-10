import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/organisms/Header';
import theme from './styles/index';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
