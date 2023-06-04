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
import Cadastro from './components/Cadastro';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
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