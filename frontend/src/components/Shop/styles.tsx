import styled from 'styled-components';

export const DivS = styled.div`
    margin-top: 2.53rem;
    padding-top: 2.53rem;
    border-top: .00625rem solid #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Cancel = styled.button`
    color: #D1402C;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: .3s;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;

    &:hover{
        border-bottom: 1px solid #D1402C;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        padding: 0.75rem 1.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.25rem;
        background: rgba(209, 64, 44, 0.10);
    }
`

export const Next = styled.button`
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

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`