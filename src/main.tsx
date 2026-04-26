import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
//import LoginPage from './pages/Login/login.tsx'
import Home from './pages/home/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
