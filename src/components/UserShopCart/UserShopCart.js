import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function UserShopCart(){
    
    const navigate = useNavigate();
    const [registros, setRegistros] = useState([]);
    const [total_carrinho, setTotalCarrinho] = useState(0);

    const id_usuario = localStorage.getItem('id_usuario');

    useEffect(() => {
        axios.get('http://localhost:8080/carrinho', {
          params: { id_usuario: id_usuario }
        })
          .then(response => {
            setRegistros(response.data);
            calculateTotalCarrinho(response.data);
          })
          .catch(error => {
            alert("Erro ao obter os registros: " + error);
          });
      }, []);

    const handleDelete = (id_carrinho) => {
        axios
          .delete(`http://localhost:8080/carrinho/${id_carrinho}`)
          .then((response) => {
            window.location.reload();
          })
          .catch((error) => {
            alert("Erro ao excluir o registro");
          });
      };

    const calculateTotalCarrinho = (data) => {
        let total = 0;
        data.forEach(registro => {
            total += registro.preco * registro.quantidade;
        });
        setTotalCarrinho(total);
    };

    const handleSubmit = async (event) => {
       
      if(registros.length > 0){
        const newOrder = {
            id_usuario: id_usuario,
            total: total_carrinho
        }
      
        axios.post('http://localhost:8080/pedidos', newOrder)
        .then(response => {
          navigate("/pedidos");
        })
        .catch(error => {
          alert('Erro');
        });
      }
    };

    return(
        <div className="container my-4">
            <table className="table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th className="text-center">Preço</th>
                        <th className="text-center">Quantidade</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (
                        <tr key={registro.id_carrinho}>
                            <td>{registro.nome}</td>
                            <td className="text-center">R$ {registro.preco}</td>
                            <td className="text-center">{registro.quantidade}</td>
                            <td className="text-center">R$ {registro.preco * registro.quantidade}</td>
                            <td className="text-center"><button className="btn btn-danger px-4 text-white" onClick={() => handleDelete(registro.id_carrinho)}><FontAwesomeIcon icon={faSquareXmark} style={{color: "#000000",}} /></button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="5" className="text-end">Total: R$ {total_carrinho}</th>
                    </tr>
                </tfoot>
            </table>
            <button onClick={handleSubmit} className="btn btn-custom">Finalizar Compra</button>
        </div>
    );
}
