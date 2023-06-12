import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export default function AdminSupplierTable (){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/fornecedores')
      .then(response => {
        setRegistros(response.data);
      })
      .catch(error => {
        alert("Erro ao obter os registros:");
      });
  }, []);

  return (
    <div id="admin-supplier" >
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-end w-75">
            <Link to='/admin/cadastro/fornecedores'>
                <button className="btn btn-custom px-4 text-white"><FontAwesomeIcon icon={faSquarePlus} style={{color: "#ffffff",}}/>&nbsp;Incluir</button>
            </Link>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
            <table className="table table-striped w-75">
                <thead className="thead-dark">
                    <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Contato</th>
                    <th className="text-center">Editar</th>
                    <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                    <tr key={registro.id_fornecedor}>
                        <td>{registro.nome}</td>
                        <td>{registro.endereco}</td>
                        <td>{registro.contato}</td>
                        <td className="text-center"><button className="btn btn-warning px-4 text-white"><FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} /></button></td>
                        <td className="text-center"><button className="btn btn-danger px-4 text-white"><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};