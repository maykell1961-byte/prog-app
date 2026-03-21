import { useState } from 'react'
import './App.css'
import Pneu from './Componentes/Pneu';
import PapaiNoel from './Componentes/PapaiNoel';
import Media from './Componentes/Media';
import Bondinho from './Componentes/Bondinho';


function App() {
  return (
    <>
    <h1>Exercícios</h1>
    <br/>
    <Pneu />
    <br/>
    <PapaiNoel />
    <br/>
    <Media/>
    <br/>
    <Bondinho/>
    <br/>
    </>
  )
}

export default App
