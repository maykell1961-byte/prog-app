import {useState} from 'react'

function CoxaoDoSantinho() {
  const[inputPedido, setInputPedido] = useState('');
  function Pedido(){

  }
  return (
    <div className={'cont-CoxãoDoSantinho'}>
        <h1>Coxão Do Santinho</h1>
        <img src="" alt="" />
        <p>Coxão Do Santinho melhor lugar para comer 
            o melhor salgadinho da praia do Santinho 
            é aproveitar melhor praia de Floripa</p>
            <button onClick ={'Cardapio'}>Cardapio</button>
            <br />
            Pedido = <input type = "Number"
            value = {inputPedido}
            onChange = {(e)=> setInputPedido(e.target.value)}
            />
            <button onClick={'Pedido'}>Fazer Pedido</button>
        </div>
  )
}

export default CoxaoDoSantinho