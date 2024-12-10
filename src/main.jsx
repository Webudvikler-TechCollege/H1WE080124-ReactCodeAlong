import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GlobalStyle } from './styled/Global.style.js'
import { theme } from './styled/Theme.style.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
