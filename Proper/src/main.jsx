import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import ToastProvider from './components/toast/ToastProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Router>
  </React.StrictMode>
);
