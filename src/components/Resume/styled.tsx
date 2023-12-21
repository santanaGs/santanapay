import styled from 'styled-components'

export const ResumeContainer = styled.article`
    max-width: max-content;
`

export const Title = styled.h1`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 500;
`

export const ProductImage = styled.img`
    margin-block: 1.5rem;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
` 

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    margin-bottom: 3rem;
`

export const ProductTitle = styled.p`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 500;
`

export const ProductPrice = styled.p`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 600;
`

export const ProductQtd = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`

export const ProductQtdButton = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    border: 1px solid #F3EFEF;
    background: #F9F9F9;
    cursor: pointer;
    transition: .3s;

    &:hover{
        background-color: #d3d3d3;
    }
`
export const CupomContainer = styled.div`
    display: flex;  
    align-items: center;
    gap: 2rem;
    margin-bottom: 5rem;
`

export const Cupom = styled.input`
    border-radius: 0.25rem;
    border: 1px solid #F3EFEF;
    background: #F9F9F9;
    outline-color: #2FBD6A;
    padding: 1.25rem;
    width: 100%;

    &::placeholder{
        color: #718096;
        font-size: 1rem;
        font-weight: 500;
    }
`

export const CupomButton = styled.button`
    height: 100%;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 0.25rem;
    border: 2px solid #2FBD6A;
    background: #FFF;
    color: #2FBD6A;
    transition: .3s;

    &:hover{
        color: #fff;
        background: #2FBD6A;    
    }
`

export const ResumePrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.7rem;    
`

export const ResumeLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
    

export const TitleResumePrice = styled.p`
    color: #4A5568;
    font-size: 1.125rem;
    font-weight: 500;
`

export const ResumePriceTaxa = styled.p`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 500;
`

export const Free = styled.p`
    color: #2FBD6A;
    font-size: 1.25rem;
    font-weight: 500;
`

export const Total = styled.p`
    color: #2D3748;
    font-size: 1.25rem;
    font-weight: 600;
`