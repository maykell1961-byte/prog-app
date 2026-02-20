
function Paridade() {
    function calcularParidade(){
        let numero = Number(prompt("Digitar o numero: "))
        if(numero %2 == 0){
            alert("É par!!!! ihuuuu")
        }else{
            alert("Impar... !☠️💀☠️")
        }
    }
    return (
        <div>
            <h2>Par ou impar?</h2>

            <button onclick={"clacularParidade"}>Paridade</button>
        </div>
    )
}

export default Paridade

