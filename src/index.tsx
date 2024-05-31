   // src/index.tsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import { ConfigProvider } from './utils/config';

   ReactDOM.render(
     <React.StrictMode>
       <ConfigProvider>
         <App />
       </ConfigProvider>
     </React.StrictMode>,
     document.getElementById('root')
   );
