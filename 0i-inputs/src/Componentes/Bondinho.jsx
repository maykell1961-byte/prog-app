import {useState} from 'react'

function Bondinho() {
    const[inputAlunos, setAlunos] = useState('')
    const[inputMonitores, setMonitores] = useState('')
    const[Viajem, setViajem] = useState('') 
    function CalculeViajem(A, m){
        if(A + M <=50){
          return "S"
          setViajem("posssivel segir Viajem")
      }else{
        return "N"
          setViajem("Não é possivel segir Viajem")
      }
          setViajem(podeSubir(10,20));
          setViajem(podeSubir(12, 39));
          setViajem(podesubir(49, 1));

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
    />
    </>
  )
}

export default Bondinho