import styled from 'styled-components';

export const DivTwoInputs = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        gap: 1rem;
    }
` 

export const Address = styled.p`
    color: #2D3748;
    font-size: 1rem;
    font-weight: 500;
`
export const DivAddress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const SelectS = styled.select`
    width: max-content;
    padding: 1.25rem;
    border-radius: 0.25rem;
    border: 1px solid #F3EFEF;
    background: #F9F9F9;

    color: #2D3748;
    font-size: 1rem;
    font-weight: 500;

    outline-color: #2FBD6A;
`