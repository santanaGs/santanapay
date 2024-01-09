import { useNavigate } from "react-router-dom";
import { Cancel, DivS, Next} from "./styles";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";


const Shop = () => {
    // Navigation
    const navigate = useNavigate();
    
    // useContext
    const { path } = useContext(AppContext) as AppContextType;

    // Rendering
    return(
        <DivS>
            <Cancel>Cancelar pedido</Cancel>
            <Next onClick={() => {navigate('/payment')}}>{path !== 'http://localhost:5173/payment' ? 'Continuar comprando' : 'Finalizar compra'}</Next>
        </DivS>
    )
}

export default Shop;