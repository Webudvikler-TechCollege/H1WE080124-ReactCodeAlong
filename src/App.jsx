import { Container } from './components/Container/Container'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { AppRouter } from './components/AppRouter/AppRouter'

/**
 * Læg mærke til at komponenter som Container og Main begge 
 * fungerer som en wrappers. Det betyder at der bruges  
 * props.children i begge komponenter
 */

function App() {

  return (
      <Container width="1024" bgcolor="white">
        <Header />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </Container>
  )
}

export default App
