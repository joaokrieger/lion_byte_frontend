import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

export default function AdminSupplierForm() {
  const { id_fornecedor } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  
  useEffect(() => {
    if (id_fornecedor != null) {
      axios.get(`http://localhost:8080/fornecedores/${id_fornecedor}`)
        .then(response => {
          setNome(response.data.nome);
          setEndereco(response.data.endereco);
          setContato(response.data.contato);
        })
        .catch(error => {
          alert("Erro ao tentar obter registro");
        });
    }
  }, [id_fornecedor]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newSupplier = {
      nome: nome,
      endereco: endereco,
      contato: contato
    };

    if (id_fornecedor != null) {
      newSupplier.id_fornecedor = id_fornecedor;
    }
    
    axios.post('http://localhost:8080/fornecedores', newSupplier)
      .then(response => {
        navigate("/admin/fornecedores");
      })
      .catch(error => {
        alert('Erro');
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card w-75 my-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-1">
              <label htmlFor="nome">Nome</label>
              <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
            </div>
            <div className="form-group my-1">
              <label htmlFor="endereco">Endereço</label>
              <input type="text" className="form-control" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required/>
            </div>
            <div className="form-group my-1">
              <label htmlFor="contato">Contato</label>
              <input type="text" className="form-control" id="endereco" value={contato} onChange={(e) => setContato(e.target.value)} required/>
            </div>
            <hr className="my-5"/>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-custom px-5 mx-2">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
