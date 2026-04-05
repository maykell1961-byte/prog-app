import {useState} from 'react'

function ChurrascariaDoGaucho() {
  const[inputPedido, setInputPedido] = useSteta('');
  function PedidoDoCardapio(){

  }
  return (
    <div className={'cont-ChurrascariaDoGaucho'}>
        <h1>churrascaria Do Gaucho</h1>
        <p>Churrascaria Do gaucho lugar aconxegante onde 
            você encontra o melhor lugar de desgustação 
            de carne é petiscos com bebidas refrescantes
            os melhores preços da cidade</p>
            <button onClick ={'Cardapio'} >Cardapio</button>
            <br />
            Pedido = <input type= "Number"
            value = {inputPedido}
            onChange = {(e)=> setInputPedido (e.target.value)}
            />
            <button onClick={'inputPedido'}>Fazer Pedido</button>
    </div>
  )
}

export default ChurrascariaDoGaucho