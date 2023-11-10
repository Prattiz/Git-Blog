import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './utils/App.routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import { GitPostContextProvider } from './Context/context';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitPostContextProvider>
          <Router/>
        </GitPostContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
