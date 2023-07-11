import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { OutputCardProvider } from './contexts/OutputCardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OutputCardProvider>
      <App />
    </OutputCardProvider>
  </React.StrictMode>
);

