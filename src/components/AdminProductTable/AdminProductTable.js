import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminProductTable (){
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/produtos')
      .then(response => {
        setRegistros(response.data);
      })
      .catch(error => {
        alert("Erro ao obter os registros:");
      });
  }, []);

  return (
    <div id="admin-product" >
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-end w-75">
                <button className="btn btn-custom px-4 text-white">Incluir</button>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
            <table className="table table-striped w-75">
                <thead className="thead-dark">
                    <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Categoria</th>
                    <th>Fornecedor</th>
                    <th className="text-center">Editar</th>
                    <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                    <tr key={registro.id}>
                        <td>{registro.nome}</td>
                        <td>{registro.descricao}</td>
                        <td>R$ {registro.preco}</td>
                        <td>{registro.quantidade}</td>
                        <td>{registro.categoria.nome}</td>
                        <td>{registro.fornecedor.nome}</td>
                        <td className="text-center"><button className="btn btn-warning px-4 text-white">Editar</button></td>
                        <td className="text-center"><button className="btn btn-danger px-4 text-white">Excluir</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};