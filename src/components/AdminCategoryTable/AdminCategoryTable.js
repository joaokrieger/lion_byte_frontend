import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';

export default function AdminCategoryTable (){
  const [registros, setRegistros] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/categorias')
      .then(response => {
        setRegistros(response.data);
      })
      .catch(error => {
        alert("Erro ao obter os registros:");
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/categorias/${id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Erro ao excluir o registro");
      });
  };

  return (
    <div id="admin-category" >
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-end w-75">
            <Link to='/admin/cadastro/categorias'>
                <button className="btn btn-custom px-4 text-white"><FontAwesomeIcon icon={faSquarePlus} style={{color: "#ffffff",}}/>&nbsp;Incluir</button>
            </Link>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-2">
            <table className="table table-striped w-75">
                <thead className="thead-dark">
                    <tr>
                    <th>Nome</th>
                    <th className="text-center">Editar</th>
                    <th className="text-center">Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                    <tr key={registro.id_categoria}>
                        <td>{registro.nome}</td>
                        <td className="text-center">
                          <Link to={`/admin/cadastro/categorias/${registro.id_categoria}`}>
                              <button className="btn btn-warning px-4 text-white"><FontAwesomeIcon icon={faPenToSquare} style={{color: "#000000",}} /></button>
                          </Link>
                        </td>
                        <td className="text-center"><button className="btn btn-danger px-4 text-white" onClick={() => handleDelete(registro.id_categoria)}><FontAwesomeIcon icon={faTrash} style={{color: "#000000",}} /></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};