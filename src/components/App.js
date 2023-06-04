import React from "react";
import imgLogo from '../img/logo.png';
import './App.css'
import {Outlet} from 'react-router-dom';

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
                    <a class="nav-link" href="#">Home</a>
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
          <Outlet/>
          <footer class="footer mt-auto py-3 bg-dark">
            <div class="container text-center">
                <img draggable="false" src={imgLogo} alt="Logo" width="100"></img>
            </div>
          </footer>
        </div>
    );
}