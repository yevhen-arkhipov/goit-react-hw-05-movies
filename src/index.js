import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        {/* <BrowserRouter> */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);