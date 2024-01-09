// Imports
import React, {useContext} from "react";

// Styled Components
import { Cupom, CupomButton, CupomContainer, Free, PriceContainer, ProductContainer, ProductImage, ProductPrice, ProductQtd, ProductQtdButton, ProductTitle, ResumeContainer, ResumeLine, ResumePrice, ResumePriceTaxa, Title, TitleResumePrice, Total } from "./styled";

// Image
import product from '../../assets/images/product.png'

// useContext
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";

const Resume: React.FC = () => {
    // Context
    const {cartNumber, setCartNumber} = useContext(AppContext) as AppContextType

    // Functions
    async function addCart() {
        setCartNumber(cartNumber + 1);
    }

    async function removeCart() {
        setCartNumber(cartNumber - 1)
    }

    const price = 15.22 * cartNumber;
    const taxa = 3.45;
    const total = price + taxa;

    // Rendering
    return(
        <ResumeContainer>
            <Title>Resumo do pedido</Title>
            <ProductImage src={product} alt="Imagem ilustrativa do produto"/>
            <PriceContainer>
                <ProductContainer>
                    <ProductTitle>Mouse Gamer Redragon</ProductTitle>
                    <ProductPrice>R${price.toFixed(2)}</ProductPrice>
                </ProductContainer>
                <ProductQtd>
                    <ProductQtdButton onClick={removeCart}>-</ProductQtdButton>
                    <ProductTitle>{cartNumber}</ProductTitle>
                    <ProductQtdButton onClick={addCart}>+</ProductQtdButton>
                </ProductQtd>
            </PriceContainer>
            <CupomContainer>
                <Cupom type="text" placeholder="Cupom de desconto"/>
                <CupomButton>Aplicar</CupomButton>
            </CupomContainer>
            <ResumePrice>
                <ResumeLine>
                    <TitleResumePrice>Taxa</TitleResumePrice>
                    <ResumePriceTaxa>R$3,45</ResumePriceTaxa>
                </ResumeLine>
                <ResumeLine>
                    <TitleResumePrice>Envio</TitleResumePrice>
                    <Free>Grátis</Free>
                </ResumeLine>
                <ResumeLine>
                    <Total>Total</Total>
                    <Total>R${total.toFixed(2)}</Total>
                </ResumeLine>
            </ResumePrice>
        </ResumeContainer>
    )
}

export default Resume;