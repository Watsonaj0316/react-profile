import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

// Render your App component wrapped in a Router component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
