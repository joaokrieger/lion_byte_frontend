import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function UserProductCard(){

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

    return(
            
        <div className="container my-3">
            <div className="row">
                {registros.map(registro => (
                    <div className="col-md-4 my-2">
                        <div className="card" key={registro.id_produto}>
                            <div className="card-body">
                                <h5 className="card-title text-center">{registro.nome}</h5>
                                <hr/>
                                <p className="card-text">{registro.descricao}</p>
                                <p className="card-text">R$ {registro.preco}</p>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/produtos/${registro.id_produto}`}>
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