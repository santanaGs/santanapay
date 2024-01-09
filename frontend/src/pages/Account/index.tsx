// Imports
import { useContext, useEffect, useState } from "react";
import InputS from "../../components/Inputs";
import Shop from "../../components/Shop";
import { Details } from "../../styles";
import { Container, LoginButton, LoginContainer, RegisterLink } from "./styles";
import { AppContextType } from "../../context/types";
import { useNavigate } from "react-router-dom";

// Sweet Alert
import Swal from "sweetalert2";

// Context
import { AppContext } from "../../context/context";

export default function Account() {
  // useContext
  const { setPath } = useContext(AppContext) as AppContextType;

  // Navigation
  const navigate = useNavigate();

  // useEffect
  useEffect(() => {
    setPath(window.location.href);
  }, []);

  // variables
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  // validations
  function checkValidation() {
    if (email !== 'gabrielsantana2267@gmail.com' || password !== '123@Mudar') {
      console.log('Erro');
      showSwal();
    } else {navigate('/shipping')}
  }

  // sweet modal
  const showSwal = () => {
    Swal.fire({
      title: "Ops, algo está errado!",
      text: "Email ou Senha incorreto.",
      icon: "error",
      customClass: {
        confirmButton: 'confirmButton',
      }
    });
  }



  // Rendering
  return (
    <Container>
      <Details>Detalhes da conta</Details>
      <>
        <InputS type="email" label="Email" onChange={(e) => setEmail(e.target.value)} />
        <InputS type="password" label="Senha" onChange={(e) => setPassword(e.target.value)} />
      </>
      <LoginContainer>
        <RegisterLink href="#">Registre-se para conta</RegisterLink>
        <LoginButton onClick={checkValidation}>Entrar</LoginButton>
      </LoginContainer>
      <Shop />
    </Container> 
  );
}
