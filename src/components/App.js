import React from "react";
import imgLogo from '../img/logo.png';
import './App.css'
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div class="d-flex flex-column min-vh-100">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img draggable="false" src={imgLogo} alt="Logo" width="200"></img>
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link to='/home'>
                      <a class="nav-link" href="#">Home</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/produtos'>
                      <a class="nav-link" href="#">Produtos</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/pedidos'>
                      <a class="nav-link" href="#">Pedidos</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/minha-conta'>
                      <a class="nav-link" href="#">Minha Conta</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-custom px-5">Carrinho de Compras</button>
              </div>
            </div>
          </nav>
          <Outlet/>
          <footer class="footer mt-auto py-3 bg-dark">
            <div class="container text-center">
                <img draggable="false" src={imgLogo} alt="Logo" width="100"></img>
            </div>
          </footer>
        </div>
    );
}