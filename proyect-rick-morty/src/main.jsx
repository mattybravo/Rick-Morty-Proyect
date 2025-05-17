import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterSite from './Router'
import Navigation from './components/Navigation/Navigation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterSite/>
  </StrictMode>,
)

