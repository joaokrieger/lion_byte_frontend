import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AdminUserTable (){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/usuarios')
      .then(response => {
        setRegistros(response.data);
      })
      .catch(error => {
        alert("Erro ao obter os registros:");
      });
  }, []);

  return (
    <div id="admin-user" >
        <div className="d-flex justify-content-center mt-5">
            <table className="table table-striped w-75 mt-5">
                <thead className="thead-dark">
                    <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                    <tr key={registro.id_usuario}>
                        <td>{registro.nome}</td>
                        <td>{registro.endereco}</td>
                        <td>{registro.email}</td>
                        <td>{registro.telefone}</td>
                        <td className="text-center"><button className="btn btn-danger px-4 text-white"><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};