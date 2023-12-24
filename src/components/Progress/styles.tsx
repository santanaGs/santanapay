import styled from 'styled-components';

//Interface
interface ProgessActive {
    active ?: boolean;
}

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3.87rem;

`
export const HeaderProgress = styled.p<ProgessActive>`
    color: ${props => props.active ? "#2FBD6A" : "#2D3748"};
    font-family: Inter;
    font-size: 1.25rem;
    font-weight: 500;
`

export const CheckProgress = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`