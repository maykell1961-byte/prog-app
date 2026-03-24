import {useState} from 'react'

function Bondinho() {
    const[inputAlunos, setAlunos] = useState('')
    const[inputMonitores, setMonitores] = useState('')
    const[Viajem, setViajem] = useState('') 
    function CalculeViajem(){
      let qtd = 0
      let Viajem = 50
      for(i =0; i <= 50; i++){
        if(Viajem <= qtd)
          setViajem("posssivel segir Viajem")
      }else{
          setViajem("Não é possivel segir Viajem")
      }


    }
  return (
    <>
    <h2>Claculo do Bondinho</h2>
    alunos = <input type= 'Nembru'
    value = {inputAlunos}
    onChange = {(e)=> setAlunos(e.target.value)}
    />
    monitores = <input type= 'Number'
    value = {inputMonitores}
    onChange = {(e)=> setMonitores(e.target.value)}
    <button onClick= {CalculeViajem}>Viajem</button>

    </>
  )
}

export default Bondinho