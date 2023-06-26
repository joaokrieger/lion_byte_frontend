import React from "react";
import imgLogo from '../../assets/img/logo_admin.png';
import '../../assets/css/AdminNavbar.css'
import {Link} from 'react-router-dom';

export default function AdminNavbar(){

  const handleLogout = () => {
    localStorage.setItem("id_usuario", "0");
    localStorage.setItem("is_admin", "false");
  };

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
              <Link to='/admin/produtos'>
                <a className="nav-link" href="#">Produtos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/admin/categorias'>
                <a className="nav-link" href="#">Categorias</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/admin/fornecedores'>
                <a className="nav-link" href="#">Fornecedores</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/admin/pedidos'>
                <a className="nav-link" href="#">Pedidos</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/admin/usuarios'>
                <a className="nav-link" href="#">Usuários</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end">
          <Link to='/'>
            <button type="submit" className="btn btn-danger px-5" onClick={handleLogout}>
              Sair
            </button>
          </Link>
        </div> 
      </div>
    </nav>
  );
}