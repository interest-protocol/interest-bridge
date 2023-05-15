import './index.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import App from './App.tsx';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
