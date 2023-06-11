import React from "react";
import imgLogo from '../../img/logo_admin.png';
import './AdminNavbar.css'
import {Link} from 'react-router-dom';

export default function AdminNavbar(){
    return(
          <nav id="admin-navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link to='/admin'>
                <a className="navbar-brand" href="#">
                  <img draggable="false" src={imgLogo} alt="Logo" width="200"></img>
                </a>
              </Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to='/admin'>
                      <a className="nav-link" href="#">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/admin-produtos'>
                      <a className="nav-link" href="#">Produtos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pedidos'>
                      <a className="nav-link" href="#">Pedidos</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pedidos'>
                      <a className="nav-link" href="#">Categorias</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pedidos'>
                      <a className="nav-link" href="#">Fornecedores</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/minha-conta'>
                      <a className="nav-link" href="#">Usuários</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
}