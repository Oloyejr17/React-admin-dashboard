import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' instead
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
