import React, { useState } from "react";

export default function ProductCard(){

    const [quantidade, setQuantity] = useState(1);

    const HandleQuantidade = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
      };

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Kingston Fury Beast</h5>
                            <hr/>
                            <p className="card-text">A memória Kingston FURY Beast DDR4 RGB* proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização. </p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-custom mx-2">Adicionar ao Carrinho</button>
                                <input type="number" className="form-control w-25" defaultValue={1} value={quantidade} onChange={HandleQuantidade}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}