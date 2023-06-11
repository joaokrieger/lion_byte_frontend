import React from "react";
import imgLogo from '../../img/logo.png';
import icnMarket from '../../img/icn_market.png';
import './Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
              <Link to='/home'>
                <a class="navbar-brand" href="#">
                  <img draggable="false" src={imgLogo} alt="Logo" width="200"></img>
                </a>
              </Link>
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
                <button type="submit" class="btn btn-custom px-5">
                  <img draggable="false" src={icnMarket} alt="Carrinho" class="mx-2" width="25"></img>
                  Carrinho de Compras
                  </button>
              </div>
            </div>
          </nav>
    );
}