import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserProductCard(){

    const [quantidade, setQuantity] = useState(1);


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

    const HandleQuantidade = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
      };

    return(
            
        <div className="container mt-3">
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
                                    <button className="btn btn-custom mx-2">Adicionar ao Carrinho</button>
                                    <input type="number" className="form-control w-25" defaultValue={1} value={quantidade} onChange={HandleQuantidade}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}