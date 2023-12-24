import Header from "./components/Header"
import ProgessBar from "./components/Progress"
import Resume from "./components/Resume"
import RouterS from "./router"

// Styled Components
import { Container, Main } from "./styles"

function App() {

  return (
    <>
     <Header/>
     <Main> 
      <Container>
      <ProgessBar/>
      <RouterS/>
      </Container>
      <Resume/>
     </Main>
    </>
  )
}

export default App
