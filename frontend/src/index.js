import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormDataProvider } from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormDataProvider>
    <App />
  </FormDataProvider>
);
