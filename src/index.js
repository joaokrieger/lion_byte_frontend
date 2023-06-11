import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);

reportWebVitals();