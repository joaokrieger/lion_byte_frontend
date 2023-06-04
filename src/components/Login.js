import React from "react";
import imgLogo from '../img/logo_black.png';
import './Login.css'
import {Link} from 'react-router-dom';

export default function Login(){
    return(
          <div class="d-flex flex-column min-vh-100">
            <div class="container mt-5 p-5">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-center mt-4">
                          <img src={imgLogo} alt="Logo" width="200"></img>
                      </div>
                      <form>
                        <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail"></input>
                        </div>
                        <div class="form-group mt-2">
                          <label for="password">Senha:</label>
                          <input type="password" class="form-control" id="password" placeholder="Digite sua senha"></input>
                        </div>
                        <div class="d-flex justify-content-center mt-4">
                          <Link to='/home'>
                            <button type="submit" class="btn btn-custom px-5">Login</button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer mt-auto py-3 bg-dark">
              <div class="container text-center">
                <Link to='/cadastro'>
                  <button type="submit" class="btn btn-custom px-5">Cadastre-se</button>
                </Link>
              </div>
            </footer>
          </div>
    );
}