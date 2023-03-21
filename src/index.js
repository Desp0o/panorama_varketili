import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LangContextProvider } from './components/langContext';
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop />
    <React.StrictMode>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </React.StrictMode>
  </Router>
);


