import './App.scss'
import { Button } from './components/Button/Button'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {

  const eventClick = () => {
    alert('You clicked this button')
  }

  return (
    <>
      <Header />
      <main>
        <Button color="red" textValue="Klik her!" clickEvent={eventClick}></Button>
      </main>
      <Footer />
    </>
  )
}

export default App
