import React from "react";
import imgLogo from '../../img/logo.png';
import icnMarket from '../../img/icn_market.png';
import './UserNavbar.css'
import {Link} from 'react-router-dom';

export default function UserNavbar(){
    return(
          <nav id="user-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link to='/home'>
                <a className="navbar-brand">
                  <img draggable="false" src={imgLogo} alt="Logo" width="200"></img>
                </a>
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to='/home'>
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/produtos'>
                      <a className="nav-link">Produtos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pedidos'>
                      <a className="nav-link">Pedidos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/minha-conta'>
                      <a className="nav-link" href="#">Minha Conta</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end">
                <Link to='/carrinho-compras'>
                  <button type="submit" className="btn btn-custom px-5">
                    <img draggable="false" src={icnMarket} alt="Carrinho" className="mx-2" width="25"></img>
                    Carrinho de Compras
                  </button>
                </Link>
              </div> 
            </div>
          </nav>
    );
}