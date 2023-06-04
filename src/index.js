import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./components/App";
import Home from "./components/Home";
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
        element: <Home/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();