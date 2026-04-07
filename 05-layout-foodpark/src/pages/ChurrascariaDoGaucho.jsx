import {useState} from 'react'

function ChurrascariaDoGaucho() {
  const[inputPedido, setInputPedido] = useState('');
  const[mostrarCardapio, setMostrarCardapio] = useState('')
  function PedidoDoCardapio(){

  }
  return (
    <div className={'cont-ChurrascariaDoGaucho'}>
    <h1>churrascaria Do Gaucho</h1>
    <img src="./img foodtrack/gaucho.webp" alt="" className={"cont-img"}/>
        <p>Churrascaria Do gaucho lugar aconxegante onde 
            você encontra o melhor lugar de desgustação 
            de carne é petiscos com bebidas refrescantes
            os melhores preços da cidade</p>
            <img src="./img foodtrack/carne.webp" alt="" className={"cont-img"}/>
            <br/>
            <button onClick ={()=> setMostrarCardapio(!mostrarCardapio)} >Cardapio</button>
            {mostrarCardapio && <div>
              Pesticos de carnebr R$ 30
              <br/>
              Pesticos de frango R$ 20
              <br/>
              Pesticos Varias Tipos de carne R$ 50
              <br/>
              Espeto Corrido R$ 70
            </div>}
            <br />
            Pedido <input type= "Number"
            value = {inputPedido}
            onChange = {(e)=> setInputPedido (e.target.value)}
            />
            <button onClick={'PedidoDoCardapio'}>Fazer Pedido</button>
    </div>
  )
}

export default ChurrascariaDoGaucho