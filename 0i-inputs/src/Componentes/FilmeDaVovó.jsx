import {useState} from 'react'

function FilmeDaVovó() {
  const[inputFilmeDaVovo, setInputFilmeDaVovo] = useState('')
  const[aumentoPercentual, setAumentoPercentual] = useState('')
  const[resultado, setResultado] = useState('')

  function aumentoPercentual(A, B){
    let percentual = ((B - A) / A) * 100;
    return percentual.toFixed(20) + "%";
    setAumentoPercentual(aumentoPercentual(20.00, 30.00));
    setAumentoPercentual(aumentoPercentual(50.00, 100.00));
    setAumentoPercentual(aumentoPercentual(10.00, 10.00));
  }
  return (
    <>
    FilmeDaVovó = <input type = "Number"
    value = {inputFilmeDaVovo}
    onChange = {(e)=> (e.target.value)}
    <button onClick = {aumentoPercentual}>aumentoPercentual</button>
    {resultado}
    </>
  )
}

export default FilmeDaVovó