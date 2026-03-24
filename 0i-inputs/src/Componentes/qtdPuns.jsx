import {useState} from 'react'

function qtdPuns() {
    const[inputPuns, setInputPuns] = useState('');
    const[qtd, setQtd] = useState('')
    function calculoPuns(){
        for(i = 0; i< 0;i++){
            
        }
    }
  return (
    <>
    <h2>Quantidades de puns</h2>
    Puns = <input type= 'Number'
    value = {inputPuns}
    onChange = {(e)=> setInputPuns(e.target.value)}
    <button onClick = {calculoPuns}>Puns</button>
    />
    </>
  )
}

export default qtdPuns