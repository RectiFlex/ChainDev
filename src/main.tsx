import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProviders } from './providers/AppProviders';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);