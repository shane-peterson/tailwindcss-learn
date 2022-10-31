import App from '@/App';
import '@/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
console.log(import.meta.env.VITE_SOME_KEY);
console.log(import.meta.env.VITE_APP_TITLE); // 123
