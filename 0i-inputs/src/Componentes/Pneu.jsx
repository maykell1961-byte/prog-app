import {useState} from 'react'
// import './Pneu.css'

function Pneu() {
    const[inputNumber, setInputNumber] = useState('')
    function pressaoDesejada(){

        console.log("Pressão desejada: " + inputNumber)
    

    }
    return (
        <>

        <h1>Pressão Desejada</h1>
        number = <input type= "Number"
        value = {inputNumber}
        onChange = {(e) => setInputNumber (e.target.value) }
            
        />
        <p>Number digitado: {inputNumber}</p>
        <button onClick= {pressaoDesejada}>pressãoDesejada</button>
        <>

        <h1>Pressão lida</h1>
        number = <input type= "Number"
        value = {InputNumber}
        onChange = {(e) => setInputNumber (e.target.value)}
        />
        <p>Number digitado: {inputNumber}</p>
        <button onClick= {pressãoLida}>pressãoLida</button>
        
        </>
    )
}

export default Pneu

