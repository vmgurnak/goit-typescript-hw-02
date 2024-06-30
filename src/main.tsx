import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './App.js';
import './index.css';

// import library React Modal
// npm install react-modal
import Modal from 'react-modal';
// Modal.setAppElement
Modal.setAppElement(document.getElementById('root') as HTMLElement);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
