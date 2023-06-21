import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate} from "react-router-dom";


export default function UserProductDetails(){

  const id_usuario = localStorage.getItem('id_usuario');

  const { id_produto } = useParams();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade_estoque, setQuantidadeEstoque] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fornecedor, setFornecedor] = useState("");

  const [quantidade_demanda, setQuantidadeDemanda] = useState(1);
  
  const navigate = useNavigate();

  const handleChange = (event) => {

    let value = event.target.value;
    if (value < 1 || value > quantidade_estoque) {
      return;
    }

    setQuantidadeDemanda(value);
  }

  useEffect(() => {

    if (id_produto != null) {
      axios.get(`http://localhost:8080/produtos/${id_produto}`)
        .then(response => {
          setNome(response.data.nome);
          setDescricao(response.data.descricao);
          setPreco(response.data.preco);
          setQuantidadeEstoque(response.data.quantidade);
          setCategoria(response.data.categoria.nome);
          setFornecedor(response.data.fornecedor.nome);
        })
        .catch(error => {
          alert("Erro ao tentar obter registro");
        });
    }

  }, [id_produto]);

  const handleSubmit = async (event) => {

    const newShopCart = {
      id_produto: id_produto,
      id_usuario: id_usuario,
      quantidade: quantidade_demanda
    };
    
    axios.post('http://localhost:8080/carrinho', newShopCart)
      .then(response => {
        navigate("/produtos");
        alert('Produto adicionado ao carrinho com sucesso!');
      })
      .catch(error => {
        alert('Erro:',error);
      });
  };

  return (
    <div className="d-flex justify-content-center my-3">
        <div className="card w-75 my-4">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-3"><b>{nome}</b></h5>
                            <h6 className="card-subtitle mb-2 text-muted">{categoria}</h6>
                            <h6 className="card-subtitle mb-4 text-muted">{fornecedor}</h6>
                            <h6 className="card-subtitle mb-4 text-muted">{descricao}</h6>
                            <p className="card-text"><b>Disponíveis:</b> {quantidade_estoque}</p>
                            <p className="card-text"><b>Preço:</b> R${preco}</p>
                            <input type="number" className="form-control w-25" id="quantidade" name="quantidade" placeholder="Quantidade" value={quantidade_demanda} onChange={handleChange} min="1" max={quantidade_estoque}/>
                            <hr></hr>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-custom px-5 ml-5">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
