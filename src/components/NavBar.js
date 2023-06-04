import React from "react";
import imgLogo from '../img/logo.png';
import '../css/NavBar.css'

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img src={imgLogo} alt="Logo" width="200"></img>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Produtos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pedidos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Minha Conta</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}