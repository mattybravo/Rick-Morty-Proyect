import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterSite from './Router'
import Navegation from './components/Navegation/Navegation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterSite/>
  </StrictMode>,
)
