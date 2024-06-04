// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import './App.css';
import App from './App';
import { ConfigProvider } from './utils/config';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
