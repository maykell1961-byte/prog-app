import {useState} from 'react'

function tiposDeCombustiveis() {
  const[inputTipoDeCombustivel,setTipoDeCombustivel] = useState('')
    const[Alcool, setAlcool] = useState('')
    const[Gasolina, setGasolina] = useState('')
    const[Diesel, setDiesel] = useState('')
    const[resultado, setResultado] = useState('')
    function calcularTiposCombustiveis(){
      let entrada = [8, 1, 7, 2, 2, 4];
      let alcool = 0;
      let gasolina = 0;
      let diesel = 0;

      for(let i =0; i < entrada.length; i++){
         let codigo = entrada[i]
         if(codigo === 1){
          alcool++;
          setAlcool("Alcool: "+ alcool)
         }else if(codigo ===2){
          gasolina++;
          setGasolina("gasolina: "+ gasolina)
         }else if(codigo === 3){
          diesel++
          setDiesel("Diesel: "+ diesel)
         }
      }

    }
  return (
    <>
        <h2>tiposDeCombustiveis</h2>
        tiposDeCombustiveis = <input type = "Number"
        value = {tiposDeCombustiveis}
        onChange = {(e)=> stetCombustiveis(e.target.value)}
        <button onClick = {tiposCombustiveis}></button>
        />
        </>
  )
}

export default tiposDeCombustiveis