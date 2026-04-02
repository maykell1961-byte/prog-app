import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';

function App() {
  const[tela, setTela]= useState(<Home />)
  
  return (
    <div className="cont-app">
    <header className={'cont-header'}>
    <nav>
      <button className={'botoes-nav'} onClick={()=> setTela(<Home />)}>Home</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<Produtos />)}>Produto</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<Contato />)}>contato</button>
    </nav>
    </header>
    <main className={'cont-main'}>
    {tela}
    </main>
    </div>
      
  )
}

export default App
