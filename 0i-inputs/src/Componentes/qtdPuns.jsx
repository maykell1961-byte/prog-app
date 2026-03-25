import {useState} from 'react'

function qtdPuns() {
  const[inputPuns,setInputPuns] = useState('')
  const[resultado,setResultado] = useState('')
  function Puns(N){
    let numero = 1;

    for(let i = 0; i < N; i++){
      setPuns('${numero} ${numero +1} ${numero + 2} Puns');
      numero += 4
    }
    
  }
  return (
    <>
    <h2>Quantidades de puns</h2>
    Puns = <input type= 'Number'
    value = {inputPuns}
    onChange = {(e)=> setInputPuns(e.target.value)}
    <button onClick = {calculoPuns}>Puns</button>
    {resultado}
    </>
  )
}

export default qtdPuns