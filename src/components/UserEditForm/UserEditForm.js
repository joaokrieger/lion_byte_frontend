import {Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UserEditForm(){

    const id_usuario = localStorage.getItem('id_usuario');

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleToggleSenha = () => {
      setMostrarSenha(!mostrarSenha);
    };    
    
    const handleSubmit = async (event) => {
      event.preventDefault();
        
        const user = {
            id_usuario: id_usuario,
            nome: nome,
            email: email,
            senha: senha,
            endereco: endereco,
            telefone: telefone,
            is_admin: false
        }
        
        axios.post('http://localhost:8080/usuarios', user)
        .then(response => {
          window.location.reload();
        })
        .catch(error => {
          alert('Erro: ',error);
        });
      };

    useEffect(() => {
        if (id_usuario != null) {
          axios.get(`http://localhost:8080/usuarios/${id_usuario}`)
            .then(response => {
              setNome(response.data.nome);
              setEmail(response.data.email);
              setSenha(response.data.senha);
              setEndereco(response.data.endereco);
              setTelefone(response.data.telefone);
            })
            .catch(error => {
              alert("Erro ao tentar obter registro");
            });
        }
    }, [id_usuario]);

    return(
        <div className="d-flex justify-content-center">
            <div className="card w-75 my-4">
                <div className="card-body">
                <h5 className="card-title text-center">Informações de Usuário</h5>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="firstName" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required></input>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Senha</label>
                        <div className="input-group">
                            <input type={mostrarSenha ? 'text' : 'password'} className="form-control" id="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                            <button className="btn btn-outline-secondary" type="button" onClick={handleToggleSenha}> {mostrarSenha ? 'Ocultar' : 'Mostrar'}</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="address" className="form-label">Endereço</label>
                        <input type="text" className="form-control" id="address" placeholder="Digite seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required></input>
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Telefone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Digite seu telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required></input>
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