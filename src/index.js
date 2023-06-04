import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./components/App";
import Home from "./components/Home";
import Login from './components/Login';
import Produto from './components/Produto';
import Pedido from './components/Pedido';
import MinhaConta from './components/MinhaConta';

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
      },
      {
        path: "/produtos",
        element: <Produto/>
      },
      {
        path: "/pedidos",
        element: <Pedido/>
      },
      {
        path: "/minha-conta",
        element: <MinhaConta/>
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