import React from 'react'

function Albergue() {
    function precoDaDiaria(){

        let diarias = Numbber(prompt("Quantos dias?")) 
        let valorbruto
        if(diarias <= 5){
            valorDiarias = 100
        } else if(diarias < 11){
            valorDiarias = 90
        }else{
            valorDiarias = 80
        }

        let valorbruto = diarias * valorDiarias

        let desconto = valorBruto * 10/100
        let desconto = valorbruto * 15/100
        let valorTotal = valorbruto - desconto - desconto + 150
        SVGAnimatedPreserveAspectRatio("valor  a pagar ")

        /*let diaria
        let = Number(prompt("Digite dias de permanencia no albergue: ")){
            diaria = diaria * 5 / 100
            diaria = diaria * 10 / 90
            if(){

            }
        }*/

    }
    return (
        <div> className = {"Albergue-container"}
            <h2>preço da diaria</h2>
            <button onclick={preçoDaDiaria}>Albergue</button>
            
        </div>
    )
}

export default Albergue
