import {useState} from 'react'

function AproRepor() {
    const[inputNota1, setInputNota1] = useState ('')
    const[inputNota2, setInputNota2] = useState ('')
    const[Resultado, setResultado] = useState ('')

    function calcularNota(){
        let media = (Number(inputNota1) + Number(inputNota2)) / 2

        if(media >=7){
            setResultado('aprovado')
        }else if(4 <= media && media < 7){
            setResultado('recuperação')
        }else{
            setResultado('reprovado')
        }
    }

    return (
        <>
        <h2>Nota</h2>
        nota1 = <input type= "number"
        value = {inputNota1}
        onChange = {(e1)=> setInputNota1 (e1.target.value) }
        />
        nota2 = <input type= "number"
        value = {inputNota2}
        onChange = {(e2)=> setInputNota2(e2.target.value)}
        />
        <p>Aluno Aprovado?</p>
        <button onClick= {calcularNota}>calcular</button>
        <p>{Resultado}</p>
        </>
    )
}
export default AproRepor

