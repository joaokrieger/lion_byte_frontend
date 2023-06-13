import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function AdminProductForm(){

  const navigate = useNavigate();
    
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fornecedor, setFornecedor] = useState("");

  const [categorias, loadCategorias] = useState([]);
  const [fornecedores, loadFornecedores] = useState([]);

  useEffect(() => {
    // Carregar categorias
    axios
      .get("http://localhost:8080/categorias")
      .then((response) => {
        loadCategorias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter as categorias:", error);
      });

    // Carregar fornecedores
    axios
      .get("http://localhost:8080/fornecedores")
      .then((response) => {
        loadFornecedores(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter os fornecedores:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProduct = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      quantidade: quantidade,
      id_fornecedor: Number(fornecedor),
      id_categoria: Number(categoria)
    }
    
    axios.post('http://localhost:8080/produtos', newProduct)
    .then(response => {
      navigate("/admin/produtos");
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
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="preco">Preço</label>
                        <input type="number" step="0.01" className="form-control" id="preco" value={preco}onChange={(e) => setPreco(e.target.value)} required/>
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input type="number" className="form-control" id="quantidade" value={quantidade}onChange={(e) => setQuantidade(e.target.value)} required/>
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="categoria">Categoria</label>
                        <select className="form-control" id="categoria" value={categoria.id_categoria} onChange={(e) => setCategoria(e.target.value)} required>
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id_categoria} value={categoria.id_categoria}> {categoria.nome} </option>
                        ))}
                        </select>
                    </div>
                    <div className="form-group my-1">
                        <label htmlFor="fornecedor">Fornecedor</label>
                        <select className="form-control"  id="fornecedor"  value={fornecedor.id_fornecedor}  onChange={(e) => setFornecedor(e.target.value)} required>
                        <option value="">Selecione um fornecedor</option>
                        {fornecedores.map((fornecedor) => (
                            <option key={fornecedor.id_fornecedor} value={fornecedor.id_fornecedor}>{fornecedor.nome} </option>
                        ))}
                        </select>
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
