import React, { useState, useEffect } from "react";
import axios from "axios";

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
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-center">{registro.data}</h5>
                                <hr/>
                                <p className="card-text">R${registro.total}</p>
                                <p className="card-text">{registro.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}