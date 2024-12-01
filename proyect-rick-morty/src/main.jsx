import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Characters from './pages/Characters/characters'
import Navegation from './components/Navegation/Navegation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Characters/>
  </StrictMode>,
)
