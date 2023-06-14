import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

export default function AdminCategoryForm() {
  const { id_categoria } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  
  useEffect(() => {
    if (id_categoria != null) {
      axios.get(`http://localhost:8080/categorias/${id_categoria}`)
        .then(response => {
          setNome(response.data.nome);
        })
        .catch(error => {
          alert("Erro ao tentar obter registro");
        });
    }
  }, [id_categoria]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCategory = {
      nome: nome
    };

    if (id_categoria != null) {
      newCategory.id_categoria = id_categoria;
    }
    
    axios.post('http://localhost:8080/categorias', newCategory)
      .then(response => {
        navigate("/admin/categorias");
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
            <hr className="my-5"/>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-custom px-5 mx-2">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
