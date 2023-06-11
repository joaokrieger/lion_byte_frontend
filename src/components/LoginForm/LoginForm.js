import React, {useState} from "react";
import imgLogo from '../../img/logo.png';
import './LoginForm.css'
import {Link} from 'react-router-dom';

export default function LoginForm(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return(
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-5">
          <div className="card bg-dark">
            <div className="card-body">
              <div className="d-flex justify-content-center mt-4">
                  <img src={imgLogo} alt="Logo" width="200"></img>
              </div>
              <form>
                <div className="form-group">
                  <label className="text-white" for="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group mt-2">
                  <label className="text-white" for="password">Senha:</label>
                  <input type="password" className="form-control" id="password" placeholder="Digite sua senha" value={senha} onChange={(event) => setSenha(event.target.value)}></input>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  <button type="submit" className="btn btn-custom px-4 mx-2">Login</button>
                  <Link to='/cadastro'>
                    <button className="btn btn-secondary px-4 mx-2 text-white">Cadastrar-se</button>
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