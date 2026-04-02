import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import TabernaPeriodica from './pages/TabernaPeriodica';
import CoxaoDoSantinho from './pages/CoxaoDoSantinho';
import ChurrascariaDoGuacho from './pages/ChurrascariaDoGaucho';
function App() {
  const[tela, setTela]= useState(<Home />)
  
  return (
    <div className="cont-app">
    <header className={'cont-header'}>
    <nav>
      <button className={'botoes-nav'} onClick={()=> setTela(<Home />)}>Home</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<Produtos />)}>Produto</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<Contato />)}>contato</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<TabernaPeriodica />)}>Taberna Periodica</button>
      <button className={'botoes-nav'} onClick={()=> setTela(<CoxaoDoSantinho />)}>Coxão do Santinho</button>
      <button classname={'botoes-nav'} onClick={()=> setTela(<ChurrascariaDoGaucho />)}>Churrascaria do gaucho</button>
    </nav>
    </header>
    <main className={'cont-main'}>
    {tela}
    </main>
    <TabernaPeriodica />
    <CoxaoDoSantinho />
    </div>
      
  )
}

export default App
