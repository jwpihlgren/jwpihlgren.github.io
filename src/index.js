import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/app/App';
import ScrollToTop from "./components/scrollToTop";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <ScrollToTop />
  <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

