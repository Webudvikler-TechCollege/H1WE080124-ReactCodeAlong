import './App.scss'
import { Button } from './components/Button/Button'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {

  const btnClick = () => {
    alert('You clicked the button.')
  }

  return (
    <>
      <Header />
      <main>
        <Button textValue="Køb" bgColor="purple" clickEvent={btnClick} />
      </main>
      <Footer />
    </>
  )
}

export default App
