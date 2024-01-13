import styled from 'styled-components';


export const Container = styled.div`

`

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;
`

export const RegisterLink = styled.button`
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: .3s;
    border: none;
    background-color: red;
    padding: 1rem .7rem;
    border-radius: .2rem;
    color: #fff;
    cursor: pointer;

    &:hover{
        background-color: #8d1e1e;
    }
`

export const LoginButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    background: #2FBD6A;
    display: inline-flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    color: #F7FAFC;
    cursor: pointer;
    transition: .3s;

    &:hover{
        background-color: #22834a;
    }
`