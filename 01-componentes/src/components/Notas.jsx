
import 

function Notas() {
    function classificarNota(){
        let nota = Number(prompt("Digite a nota (0 a 100): "))
        /*if(nota == ("0 < 20")){
            alert("nota == A")
        }else if(nota == ("21 < 40")){
            alert("nota == B")
        }else if(nota == ("41 < 60")){
            alert("nota == C")
        }else if(nota == ("61 < 80")){
            alert("nota == D")
        }else if(nota == ("81 < 100")){
            alert("nota == E")
        }*/
        if(nota > 80){
            alert("A")
        }else if(nota > 60){
            alert("B")
        }else if(nota > 40){
            alert("C")
        }else if(nota > 20)
            alert("D")
        }else if(nota > 0){
            alert("E")
        }else{
            
        }
    
    return (
        <div>
        <h2>Classificarção de Notas</h2>
        <button onclick={classificarNotas}></button>
            
        </div>
    )
}

export default Notas