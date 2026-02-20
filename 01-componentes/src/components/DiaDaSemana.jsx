import './DiasDaSemana.css'

function DiaDaSemana() {
    function verificarDia(){
        // let dia = Number(prompt("Digite o dia da semana (1 a 7"): "))
    let dia = prompt("Digite o dia da semana (1 a 7): ")
    dia = Number(dia)

    /*if(dia == 1){
        alert("domingo")
    }else if(dia == 2){
        alert("seguda")
    }else if(dia == 3){
        alert("terça")
    }else if(dia == 4){
        alert("quarta")
    }else if(dia == 5){
        alert("quinta")
    }else if(dia == 6){
        alert("sexta")
    }else if(dia == 7){
        alert("sábado")
    }*/

    switch(dia){
        case 1: alert("Domingo")
                break
        case 2: alert("Segundo")
                break
        case 3: alert("Terça")
                break
        case 4: alert("quarta")
                break
        case 5: alert("Quinta")
                break
        case 6: alert("Sexta")
                break
        case 7: alert("Sábado")
                break
        default: alert("Esse dia não existe ou é carnaval")
    }
}
    return (
        <div className={"container-dia"}>
            <h2>Dia da semana</h2>
            <button onClick={VerificarDia}>Verificar dia</button>
        </div>
    )
}

export default DiaDaSemana
