import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { firebaseApp } from './firebase-config';
import { FirebaseAppProvider } from './context';
import { ModuleRoutes } from './modules';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FirebaseAppProvider app={firebaseApp}>
        <BrowserRouter>
          <ModuleRoutes />
        </BrowserRouter>
      </FirebaseAppProvider>
    </ThemeProvider>
  );
};
