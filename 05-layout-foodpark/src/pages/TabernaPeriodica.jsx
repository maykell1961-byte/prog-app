import {useState} from 'react'

function TabernaPeriodica() {
    const[inputPedido, setInputPedido] = useState('');
    function Pedido(){

    }
    return (
        <div classeName={'cont-TabernaPeriodica'}>
            <h1>Taberna Periodica</h1>
            <img src="" alt="" />
            <p>Taberna periodica um lugar onde se pode 
                aproveir o espaço para programar seu 
                react é desfurtar de seus petiscos é 
                bebidas musica ao vivo
                </p>
                <button onClik ={'Cardapio'}>Cardapio</button>
                <br />
                Pedido = <input type = "Number"
                value = {inputPedido}
                onChange = {(e)=> setInputPedido (e.target.value)}
                />
                <button onClick={'pedido'}>Fazer pedido</button>
            
        </div>
    )
}

export default TabernaPeriodica
