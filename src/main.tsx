import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './App.routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/global';
import { UserGitContextProvider } from './Context/context';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserGitContextProvider>
          <Router/>
        </UserGitContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
