import './App.scss'
import { Container } from './components/Container/Container'
import { Dishes } from './components/Dishes/Dishes'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <Container width="1024">
      <Header />
      <Main>
        <Dishes />
      </Main>
      <Footer />
    </Container>
  )
}

export default App
