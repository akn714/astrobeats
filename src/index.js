import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import Login from './components/Login.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login />
  </React.StrictMode>
);