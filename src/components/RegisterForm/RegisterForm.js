import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function RegisterForm(){

    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const newUser = {
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco,
        telefone: telefone,
        is_admin: false
      }
      
      axios.post('http://localhost:8080/usuarios', newUser)
      .then(response => {    
        navigate("/");
      })
      .catch(error => {
        alert('Erro: ',error);
      });
    };

    return(
        <div className="d-flex justify-content-center">
            <div className="card w-75 my-4">
                <div className="card-body">
                    <h5 className="card-title text-center">Cadastro de Usuário</h5>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="firstName" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}  required></input>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}  required></input>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required></input>
                        </div>
                        <div className="mb-3">
                            <label for="address" className="form-label">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="Digite seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}  required></input>
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">Telefone</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}  required></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-custom px-5">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}