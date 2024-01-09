// Imports
import React, {useContext, useState} from "react";

// Styled Components
import { Account, AccountContent, Arrow, Cart, CartContent, CartIcon, CloseMenu, Container, ContainerItens, ContainerMobile, Icons, IconsContainer, LastContainer, Line, Logo, Menu, MenuButton, MenuOpen, NavBar, NavLink } from "./styles";

// Images
import arrow from '../../assets/svg/Vector.svg'
import cart from '../../assets/svg/ShoppingCart.svg'
import cartMobile from '../../assets/svg/ShoppingCartMobile.svg'
import user from '../../assets/svg/User.svg'
import menu from '../../assets/svg/List.svg'

// useContext
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

const Header: React.FC = () =>{
    // Context
    const {cartNumber} = useContext(AppContext) as AppContextType;

    // Function
    function openMenu(){
        setOpen(!open)
    }

    // useState
    const [open, setOpen] = useState<boolean>(false);

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
        <ContainerMobile>
            <ContainerItens>
                <Logo>santanapay.</Logo>
                <IconsContainer>
                    <Icons src={cartMobile} alt="icons menu mobile"/>
                    <Icons src={user} alt="icons menu mobile"/>
                    <MenuButton onClick={openMenu}>
                    <Icons src={menu} alt="icons menu mobile"/>
                    </MenuButton>
                </IconsContainer>
            </ContainerItens>
        </ContainerMobile>
        {/* {open && ( */}
            <MenuOpen open={open}>
                <Menu>
                <NavBar>
                    <NavLink href="#">Início</NavLink>
                    <NavLink href="#">Comprar</NavLink>
                    <NavLink href="#">Contato</NavLink>
                    <NavLink href="#">Ajuda</NavLink>
                </NavBar>
                <CloseMenu onClick={ () => {setOpen(!open)} }>
                    X
                </CloseMenu>
                </Menu>
            </MenuOpen>
        {/* )} */}
        <Line/>
        </>
    )
}

export default Header;