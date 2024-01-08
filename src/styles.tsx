import styled from 'styled-components';

export const Main = styled.main`
    width: 75rem;
    margin: 8.25rem auto 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 8rem;

    @media screen and (max-width: 768px) {
        width: 90%;
        flex-direction: column;
        margin: 2.5rem auto;
        gap: 4rem;
    }
` 
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Details = styled.h3`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
`