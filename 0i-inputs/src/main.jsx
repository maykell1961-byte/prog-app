import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pneu from './Componentes/Pneu';
import PapaiNoel from './Componentes/PapaiNoel';
import AproRepor from './Componentes/AproRepro';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
     <br/>
    <Pneu />
    <br/>
    <PapaiNoel />
    <br/>
  </StrictMode>,
)
