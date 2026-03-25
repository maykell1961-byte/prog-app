import {useState} from 'react'

function CorridaDeLesmas() {
  const[inputNivelLesmas, setNivelLesmas] = useState('')
  const[resultado, setResultado] = useState('')
  function nivelLesmas(casos){
    for(let i = 0; casos.length; i++){
      let velocidades = casos[i];
      let max = math.max(velocidades);

      let nivel;

      if(max < 10){
        nivel = 1;
      }else if(max < 20){
        nivel = 2;
      }else{
        nivel = 3;
      }
      setNivel('nivel')
    }
    
  }
  return (
    <>
    CorridaDeLesmas = <input type = "Number"
    value = {inputNivelLesmas}
    onChager = {(e)=> (e.target.value)}
    <button onClick = {nivelLesmas}>casos</button>
    {resultado}
    
    </>
  )
}

export default CorridaDeLesmas