import './App.scss'
import { Container } from './components/Container/Container'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

/**
 * Læg mærke til at komponenter som Container og Main begge 
 * fungerer som en wrappers. Det betyder at der bruges  
 * props.children i begge komponenter
 * @returns 
 */

function App() {

  return (
    <BrowserRouter>
      <Container width="1024" bgcolor="white">
        <Header />
        <Main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
