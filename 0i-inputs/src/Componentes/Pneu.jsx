import {useState} from 'react'
// import './Pneu.css'

function Pneu() {
    const[inputDigitada, setInputDigitada] = useState('')
    const[inputLida, setInputLida] = useState("")
    const[resultado, setResultado] = useState("")
    function pressaoDesejada(){
        let diferenca = inputDigitada - inputLida;


       // console.log("Pressão desejada: " + diferenca)
        setResultado ("Pressão desejada: " + diferenca)
    

    }
    return (
        <>

        <h1>Claculo de Pressão</h1>
        Pressão digitada = <input type= "Number"
        value = {inputDigitada}
        onChange = {(e) => setInputDigitada (e.target.value) }
            
        />
     
         Pressão lida = <input type= "Number"
        value = {inputLida}
        onChange = {(e) => setInputLida (e.target.value)}
         /> 
       
        <button onClick= {pressaoDesejada}>Clacular</button>
        {resultado}
        
        </>
    )
}

export default Pneu

