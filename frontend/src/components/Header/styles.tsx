import styled from 'styled-components'

interface MenuProps {
    open ?: boolean
}

export const Line = styled.div`
width: 100%;
height: 0.0625rem;
background: #E2E8F0;
`

export const Container = styled.header`
    width: 75rem;
    height: 5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Logo = styled.p`
    color: #4A5568;
    font-size: 1.25rem;
    font-weight: 700;
`

export const NavBar = styled.nav`
    display: flex;
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        padding-left: 2rem;
        padding-top: 2rem;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: #4A5568;
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: .3s;

    &:hover{
        border-bottom: 1px solid #4A5568;
    }
`

export const LastContainer = styled.div`
    display: flex;
    gap: 3.5rem;
    align-items: center;
`

export const Account = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const Arrow = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

export const AccountContent = styled.p`
    color: #4A5568;
    font-size: 1rem;
    font-weight: 500;
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    gap: .7rem;
`

export const CartContent = styled.p`
    color: #4A5568;
    font-size: 1rem;
    font-weight: 400;
`

export const CartIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

// ============== MOBILE ================= //

export const ContainerMobile = styled.div`
    height: 3.75rem;
    width: 100%;
    display: flex;
    align-items: center;

    @media screen and (min-width: 767px) {
        display: none;
    }

`

export const ContainerItens = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const Icons = styled.img`
    width: 1rem;
    height: 1rem;
`

export const MenuButton = styled.button`
    background-color: transparent;
    border: none;
`

export const MenuOpen = styled.div<MenuProps>`
    background-color: #00000038;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(${props => props.open ? "0px" : "-1000px"});
    transition: .7s;

    @media screen and (min-width: 767px) {
        display: none;
    }
`

export const Menu = styled.nav`
    width: 75%;
    height: 100vh;
    background-color: #fff;
    position: relative;
`

export const CloseMenu = styled.button`
    position: absolute;
    top: 2%;
    right: 5%;

    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 1.3rem;
`