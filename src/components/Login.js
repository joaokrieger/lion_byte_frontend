import React from "react";
import imgLogo from '../img/logo_black.png';
import '../css/components/Login.css'

export default function Login(){
    return(
        <div class="container mt-5">
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
                    <button type="submit" class="btn btn-custom">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}