import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5e0b0b',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#070760',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#7b7b7b',
      paper: '#585858',
    },
    text: {
      secondary: '#00e3ff',
      disabled: '#FFFFFF',
      hint: '#152390',
      primary: '#00e3ff',
    },
  },
  typography: {
    fontFamily: 'Arial',
    fontSize: 15
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
