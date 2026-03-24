import {useState} from 'react'

function tiposDeCombustiveis() {
    const[inputCombustiveis, setCombustiveis] = useState('')
    const[tipos, setTipos] = useState('')
    function calcularTipos(){

    }
  return (
    <>
        <h2>tiposDeCombustiveis</h2>
        tiposDeCombustiveis = <input type = "string"
        value = {tiposDeCombustiveis}
        onChange = {(e)=> stetCombustiveis(e.target.value)}
        <button onClick = {tiposCombustiveis}></button>
        </>
  )
}

export default tiposDeCombustiveis