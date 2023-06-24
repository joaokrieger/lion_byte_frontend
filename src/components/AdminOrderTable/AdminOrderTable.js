import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

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

  const handleDelete = (id_pedido) => {
    axios
      .delete(`http://localhost:8080/pedidos/${id_pedido}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Erro ao excluir o registro");
      });
  };

  const handleAdvance = (id_pedido) => {
    axios.get(`http://localhost:8080/pedidos/atender/${id_pedido}`)
    .then(response => {
      window.location.reload();
    })
    .catch(error => {
      alert("Erro ao atender o registro");
    });
  };

  return (
    <div id="admin-order" >
        <div className="d-flex justify-content-center mt-5">
            <table className="table table-striped w-75 mt-5">
                <thead className="thead-dark">
                    <tr>
                      <th className="text-center">Pedido</th>
                      <th className="text-center">Data</th>
                      <th className="text-center">Total</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Atender</th>
                      <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                      <tr key={registro.id_pedido}>
                          <td className="text-center">#{registro.id_pedido}</td>
                          <td className="text-center">{moment(registro.data).format("DD/MM/YYYY")}</td>
                          <td className="text-center">R$ {registro.total}</td>
                          <td className="text-center">{registro.status}</td>
                          <td className="text-center"><button className="btn btn-custom px-4 text-white" onClick={() => handleAdvance(registro.id_pedido)}><FontAwesomeIcon icon={faPlay} style={{color: "#000000",}} /></button></td>
                          <td className="text-center"><button className="btn btn-danger px-4 text-white" onClick={() => handleDelete(registro.id_pedido)}><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button></td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};