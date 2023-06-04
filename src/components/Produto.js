import React from "react";

export default function Produto(){

    return(
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4 my-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title text-center">Kingston Fury Beast</h5>
                            <hr/>
                            <p class="card-text">A memória Kingston FURY Beast DDR4 RGB* proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização. </p>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-custom">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}