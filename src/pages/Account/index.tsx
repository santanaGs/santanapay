
import { useContext, useEffect } from "react";
import InputS from "../../components/Inputs";
import Shop from "../../components/Shop";
import { Details } from "../../styles";
import { Container, LoginButton, LoginContainer, RegisterLink } from "./styles";

// Context
import { AppContext } from "../../context/context";
import { AppContextType } from "../../context/types";


export default function Account(){
    // useContext
    const {setPath} = useContext(AppContext) as AppContextType;

    // useEffect
    useEffect(() => {
        setPath(window.location.href);
    },[])

    // Rendering
    return(
        <Container>
        <Details>Detalhes da conta</Details>
            <>
            <InputS type="email" label="Email"/>
            <InputS type="password" label="Senha"/>
            </>
            <LoginContainer>
                <RegisterLink href="#">Registre-se para conta</RegisterLink>
                <LoginButton>Entrar</LoginButton>
            </LoginContainer>
            <Shop/>
        </Container>
    )
}