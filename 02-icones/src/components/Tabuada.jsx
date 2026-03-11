
/*function Tabuada(){
    function CalcularTabuada(){
        let numero 
        let resultado
        let contador
    let Tabuad = Number(prompt("Digite o número 2 a 10: "))
    for(i = i; i <= 10; i++){
        resultado = numero * contador
        alert(calculerTabuada("resultado"))
    }

}
    return (
        <div>
            <h2>Tabuada</h2>
            <button onclicki="tabuada">multiplicão</button>
        </div>
    )
    }
    
    export default Tabuada*/
    
    function Tabuada() {
        const[resultado,setResultado] = useState('');
    function LerNumero(){
        let n = number(prompt("Digite o número: "));
        let linhas = ''
        let linha
        // 2x4=8
        for(i = 1; i <= 10; i++){
           // let linha = i + 'x' +
           let mult = i * n 
            linha = '${i} x ${n} = ${mult}<br>' //=>${i * n}'
            linhas += linha
            //ixn=i*n
            console.log(linha);
            
        }
        setResultado(linha);

    }
    return (
        <div style={
            {
                backgroundColor: 'red',
                }
            }>
                <h2>Tabuada</h2>

        <button onclick={LerNumero}>Informar número</button>
        {False && <p>Aparece</p>}
        Resultado: {resultado}
            
        </div>
    )
}
    
    export default Tabuada
    

