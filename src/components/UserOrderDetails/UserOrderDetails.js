import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams} from "react-router-dom";


export default function UserOrderDetails(){

  const { id_pedido } = useParams();
  const [registros, setRegistros] = useState([]);

  useEffect(() => {

    if (id_pedido != null) {
      axios.get(`http://localhost:8080/pedidos/${id_pedido}`)
        .then(response => {
            setRegistros(response.data);
            console.log(response);
        })
        .catch(error => {
          alert("Erro ao tentar obter registros");
        });
    }

  }, [id_pedido]);





  return (
    <div className="d-flex justify-content-center my-3">
        <div className="card w-75 my-4">
            <div className="card-body">
                <form>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-3"><b>{}</b></h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Produto</th>
                                            <th className="text-center">Quantidade</th>
                                            <th className="text-center">Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {registros.map(registro => (
                                            <tr>
                                                <td className="text-left">{registro.produto.nome}</td>
                                                <td className="text-center">{registro.quantidade}</td>
                                                <td className="text-center">R$ {registro.produto.preco * registro.quantidade}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            <hr></hr>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};
