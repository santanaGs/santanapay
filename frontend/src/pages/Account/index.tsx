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

// Api
import api from "../../services/api";

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
  const [err, setErr] = useState<string>('')

  // validations
  async function checkValidation() {
    try {
      const res = await api.post('/login', {
        email: email,
        password: password,
      });

      localStorage.setItem('@token', res.data.token);
      navigate('/shipping');
      setEmail('');
      setPassword('');
      setErr('');
    } catch (err) {
      setErr(err.response.data.mensagem);
      showSwal();
    }
  }

  async function register() {
    if (email === undefined || email === "" || password === undefined || password === "") {
      setErr('Preencha os campos email e password para realizar o registro');
      showSwal();
    } else {
      console.log(email, password);
      try {
        const res = await api.post('/register', {
          email: email,
          password: password,
        });
        console.log(res.data);
        setErr('Cadastrado com sucesso!');
        showSwal();
      } catch (err) {
        setErr(err.response.data.mensagem);
        showSwal();
      }
    }
  }



  // sweet modal
  const showSwal = () => {
    Swal.fire({
      title: "Ops, algo está errado!",
      text: `${err}`,
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
        <RegisterLink onClick={register}>Registre-se para conta</RegisterLink>
        <LoginButton onClick={checkValidation}>Entrar</LoginButton>
      </LoginContainer>
      <Shop />
    </Container>
  );
}
