import React from "react";

export default function UserOrderCard(){
    
    useEffect(() => {

        axios.get(`http://localhost:8080/pedidos/`)
        .then(response => {
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
            setPreco(response.data.preco);
            setQuantidadeEstoque(response.data.quantidade);
            setCategoria(response.data.categoria.nome);
            setFornecedor(response.data.fornecedor.nome);
        })
        .catch(error => {
            alert("Erro ao tentar obter registro");
        });
    
    }, []);

    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Pedido 1</h5>
                            <hr/>
                            <p className="card-text">A memória Kingston FURY Beast DDR4 RGB* proporciona um poderoso aumento de performance para jogos, edição de vídeo e renderização. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}