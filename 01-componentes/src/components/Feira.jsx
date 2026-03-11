import {useState} from 'react'

function Feira() {
   const[saida, setSaida] = useState(0)

    //let saida = 0
    function calculeMacas(){
        let preco 
        let qtd = Number(prompt("Quantas maças?"))
         if(qtd < 12){
             preco = 0.3
         }else{
             preco = 0.25
         }
        let valor = qtd * preco
        //alert("valor: R$" + Valor.tofixed(2))
        //saida = 'muitas maçãs; muitas mesmo'
        setSaida('R$' + valor.tofixed(2))
    }
   /* function valorMaças(){
        let maca = a,b;
        a = 30
        b = 25
        let macas = Number(prompt("Digite Quantidade de maçã"))
            if(maca -= 12){
            alert("maçã custa b: ")
    }else if(maca += 12){
           alert("maçã custa a: ")
    }*/
    return (
        <div>
            <h2>Maçã custa </h2>
            <p>
                Resultado: {saida}
            </p>
            <button onclick={calculemacas}>Maçãs</button>
            
        </div>
    )
}

export default Feira
