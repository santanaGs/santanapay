import styled from 'styled-components'

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