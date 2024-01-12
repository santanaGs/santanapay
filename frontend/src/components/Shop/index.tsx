import { useNavigate } from "react-router-dom";
import { Cancel, DivS, Next } from "./styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

// Sweet Alert
import Swal from "sweetalert2";
import api from "../../services/api";


const Shop = () => {
    // Navigation
    const navigate = useNavigate();

    // useContext
    const { path, cartNumber, setCartNumber } = useContext(AppContext) as AppContextType;

    function finishOrder() {
        api.post('/create-order', {
            "productName": "Mouse Pad",
            "qtdProduct": cartNumber
        }).then(() => {
            modal()
        }).catch((err) => {
            console.log(err)
        })
    }

    // sweet modal
    const modal = () => {
        Swal.fire({
            title: "Pedido finalizado!",
            text: "Obrigado por comprar na santanapay.",
            icon: "success",
            customClass: {
                confirmButton: 'confirmButton',
            },
            showCancelButton: false,
            confirmButtonText: 'Ok', // Altere o texto do botão de confirmação conforme necessário
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
                setCartNumber(1);
                console.log('Novo pedido!');
            }
        });
    }

    // Rendering
    return (
        <DivS>
            <Cancel>Cancelar pedido</Cancel>
            <Next
                onClick={() => {
                    path !== 'https://santanapay.vercel.app/payment' ? navigate('/payment') : finishOrder();
                }}
            >
                {path !== 'https://santanapay.vercel.app/payment' ? 'Continuar comprando' : 'Finalizar compra'}
            </Next>
        </DivS>
    )
}

export default Shop;