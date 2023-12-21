// Imports
import React, {useContext} from "react";

// Styled Components
import { Account, AccountContent, Arrow, Cart, CartContent, CartIcon, Container, LastContainer, Line, Logo, NavBar, NavLink } from "./styles";

// Images
import arrow from '../../assets/svg/Vector.svg'
import cart from '../../assets/svg/ShoppingCart.svg'

// useContext
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

const Header: React.FC = () =>{
    // Context
    const {cartNumber} = useContext(AppContext) as AppContextType;

    // Rendering
    return(
        <>
        <Container>
            <Logo>santanapay.</Logo>
            <NavBar>
                <NavLink href="#">Início</NavLink>
                <NavLink href="#">Comprar</NavLink>
                <NavLink href="#">Contato</NavLink>
                <NavLink href="#">Ajuda</NavLink>
            </NavBar>
            <LastContainer>
                <Account>
                    <AccountContent>Conta</AccountContent>
                    <Arrow src={arrow} alt='icone de uma seta virada para baixo'/>
                </Account>
                <Cart>
                    <CartContent>
                       {cartNumber} items
                    </CartContent>
                    <CartIcon src={cart} alt="iconde do carrinho de compras"/>
                </Cart>
            </LastContainer>
        </Container>
        <Line/>
        </>
    )
}

export default Header;