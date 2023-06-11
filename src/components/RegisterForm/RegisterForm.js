import React from "react";
import {Link} from 'react-router-dom';

export default function RegisterForm(){

    return(
        <div class="d-flex justify-content-center">
            <div class="card w-75 my-4">
                <div class="card-body">
                    <h5 class="card-title text-center">Cadastro de Usuário</h5>
                    <hr/>
                    <form>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="firstName" placeholder="Digite seu nome" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Sobrenome</label>
                            <input type="text" class="form-control" id="lastName" placeholder="Digite seu sobrenome" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="address" placeholder="Digite seu endereço" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Telefone</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Digite seu telefone" required></input>
                        </div>
                        <div class="d-flex justify-content-center">
                            <Link to='/home'>
                                <button type="submit" class="btn btn-custom px-5">Cadastrar-se</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}