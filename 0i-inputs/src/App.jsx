import { useState } from 'react'
import './App.css'


function App() {
  const[inputNome, setInputNome] = useState('')
  function cadastrar(){
    console.log("Cadastrar:" + inputNome)

  }
  return (
    <>
    <h1>Inputs controlados</h1>
    nome <input type="text"
      value={inputNome}
      onChange={ (e) => setInputNome (e.target.value)}
    />

  <p>nome digitado: {inputNome}</p>
     <button onClick={cadastrar}> Cadastrar</button>

    </>
  )
}

export default App
