import './App.scss'
import { Container } from './components/Container/Container'
import { Dishes } from './components/Dishes/Dishes'
import { Example } from './components/Example/Example'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

/**
 * Læg mærke til at komponenter som Container og Main begge 
 * fungerer som en wrappers. Det betyder at der bruges  
 * props.children i begge komponenter
 * @returns 
 */

function App() {

  // Array til Dishes komponent
  const arrDishes = [
    'Spaghetti & Kødsovs',
    'Bøf med løg',
    'Burger med fritter',
    'Kartoffelsuppe',
    'Tarteletter'
  ]

  return (
    <Container width="1024" bgcolor="white">
      <Header />
      <Main>
        <Example color="red" />
        <Example color="blue" />
        <Example />
      </Main>
      <Footer />
    </Container>
  )
}

export default App
