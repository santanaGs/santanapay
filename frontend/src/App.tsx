import Header from "./components/Header"
import ProgessBar from "./components/Progress"
import Resume from "./components/Resume"
import RouterS from "./router"

// Styled Components
import { Container, Main } from "./styles"

// useQuery
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  // variables
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Header />
      <Main>
        <Container>
          <ProgessBar />
          <RouterS />
        </Container>
        <Resume />
      </Main>
    </QueryClientProvider>
  )
}

export default App
