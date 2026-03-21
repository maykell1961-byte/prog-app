import {useState} from 'react'

function Bondinho() {
    const[inputClaculoViajem, setClaculoViajem] = useState('')
    const[viajem, setViajem] = useState('') 
    function ClaculeViajem(){

    }
  return (
    <>
    <h2>Claculo do Bondinho</h2>
    viajem de Bondnho = <input type= 'viajem'
    value= {inputClaculoViajem}
    onChange = {(e)=> setInputClaculoViajem(e.target.value)}
    />
    <button onClick= {}></button>

    </>
  )
}

export default Bondinho