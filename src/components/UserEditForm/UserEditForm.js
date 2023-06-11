import React from "react";
import {Link} from 'react-router-dom';

export default function UserEditForm(){

    return(
        <div className="d-flex justify-content-center">
            <div className="card w-75 my-4">
                <div className="card-body">
                <h5 className="card-title text-center">Informações de Usuário</h5>
                <hr/>
                <form>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Digite seu nome" required></input>
                    </div>
                    <div className="mb-3">
                        <label for="lastName" className="form-label">Sobrenome</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Digite seu sobrenome" required></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" required></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Digite sua senha" required></input>
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Endereço</label>
                        <input type="text" className="form-control" id="address" placeholder="Digite seu endereço" required></input>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Telefone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Digite seu telefone" required></input>
                    </div>
                    <hr className="my-5"/>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-custom px-5 mx-2">Salvar Alterações</button>
                        <Link to='/'>
                            <button className="btn btn-danger px-5 mx-2">Sair</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}