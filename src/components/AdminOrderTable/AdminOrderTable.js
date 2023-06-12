import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function AdminOrderTable (){
  const [registros, setRegistros] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/pedidos')
      .then(response => {
        setRegistros(response.data);
      })
      .catch(error => {
        alert("Erro ao obter os registros:");
      });
  }, []);

  return (
    <div id="admin-order" >
        <div className="d-flex justify-content-center mt-5">
            <table className="table table-striped w-75 mt-5">
                <thead className="thead-dark">
                    <tr>
                    <th>Usuário</th>
                    <th>Data</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th className="text-center">Atender</th>
                    <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                    <tr key={registro.id_pedido}>
                        <td>{registro.usuario.nome}</td>
                        <td>{registro.data}</td>
                        <td>{registro.total}</td>
                        <td>{registro.status}</td>
                        <td className="text-center"><button className="btn btn-custom px-4 text-white"><FontAwesomeIcon icon={faPlay} style={{color: "#000000",}} /></button></td>
                        <td className="text-center"><button className="btn btn-danger px-4 text-white"><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};