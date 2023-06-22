import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import moment from 'moment';

export default function UserOrderCard(){
    
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

    return(
        <div className="container mt-3">
            <div className="row">
                {registros.map(registro => (
                    <div className="col-md-4 my-2">
                        <div className="card" key={registro.id_pedido}>
                            <div className="card-body">
                                <h5 className="card-title text-center">{moment(registro.data).format("DD/MM/YYYY")}</h5>
                                <hr/>
                                <p className="card-text">{registro.total}</p>
                                <p className="card-text">R$ {registro.status}</p>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/produtos/${registro.id_pedido}`}>
                                        <button className="btn btn-custom mx-2">Ver mais</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}