import React from "react";
import imgLogo from '../../img/logo.png';
import './LoginForm.css'
import {Link} from 'react-router-dom';

export default function LoginForm(){
    return(
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="card bg-dark">
                <div class="card-body">
                  <div class="d-flex justify-content-center mt-4">
                      <img src={imgLogo} alt="Logo" width="200"></img>
                  </div>
                  <form>
                    <div class="form-group">
                      <label class="text-white" for="email">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail"></input>
                    </div>
                    <div class="form-group mt-2">
                      <label class="text-white" for="password">Senha:</label>
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
    );
}