import {useState} from 'react'

function TabernaPeriodica() {
    const[inputPedido, setInputPedido] = useState('');
    const[mostrarCardapio, setMostrarCardapio] = useState('')
    function PedidoDoCardapio(){

    }
    return (
        <div classeName={'cont-TabernaPeriodica'}>
            <h1>Taberna Periodica</h1>
            <img src="./img foodtrack/taberna.jpg" alt="" className={"cont-img"} />
            <p>Taberna periodica um lugar onde se pode 
                aproveir o espaço para programar seu 
                react é desfurtar de seus petiscos é 
                bebidas musica ao vivo
                </p>
                <img src="./img foodtrack/bebidas.jpg" alt="" className={"cont-img"}/>
                <br/>
                <button onClick ={()=> setMostrarCardapio(!mostrarCardapio)}>Cardapio</button>
                {mostrarCardapio && <div>
                    <img src="./img foodtrack/" alt=""/>
                Porções R$ 50
                <br/>
                Bebidas R$ 10
                <br/>
                Cockteis R$ 20
                </div>}
                <br />
                Pedido <input type = "Number"
                value = {inputPedido}
                onChange = {(e)=> setInputPedido (e.target.value)}
                />
                <button onClick={"PedidoDoCardapio"}>Fazer pedido</button>
        </div>
    )
}

export default TabernaPeriodica
