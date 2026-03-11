function Voto() {
    function processarIdade(){
        let idade = Number(prompt("Idade:"))
        if(idade < 16){
            alert("Não pode votar")
        }else if(idade == 16 || idade == 17){
            alert("Voto facultativo")
        }else if(idade >= 18 && idade <= 65){
                alert("Voto obrigatorio")
        }

    }
    return (
        <div> className={"Voto-container"}
        <h2>Idad para votar</h2>
        <button onclick={"processarIdade"}>Processar idade</button>
            
        </div>
    )
}

export default Voto
