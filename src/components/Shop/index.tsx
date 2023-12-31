import { useNavigate } from "react-router-dom";
import { Cancel, DivS, Next} from "./styles";


const Shop = () => {
    // Navigation
    const navigate = useNavigate();
    // Rendering
    return(
        <DivS>
            <Cancel>Cancelar pedido</Cancel>
            {/* <Next onClick={() => {navigate('/shipping')}}>Continuar comprando</Next> */}
            <Next>Continuar comprando</Next>
        </DivS>
    )
}

export default Shop;