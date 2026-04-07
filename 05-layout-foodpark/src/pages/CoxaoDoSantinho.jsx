import {useState} from 'react'

function CoxaoDoSantinho() {
  const[inputPedido, setInputPedido] = useState('');
  const[mostrarCardapio, setMostrarCardapio] = useState('')
  function PedidoDoCardapio(){

  }
  return (
    <div className={'cont-CoxãoDoSantinho'}>
        <h1>Coxão Do Santinho</h1>
        <img src="./img foodtrack/salgadinhos 1.jpg" alt="" className={"cont-img"}/>
        <p>Coxão Do Santinho melhor lugar para comer 
            o melhor salgadinho da praia do Santinho 
            é aproveitar melhor praia de Floripa</p>
            <img src="./img foodtrack/salgadinhos.jpg" alt="" className={"cont-img"}/>
            <br/>
            <button onClick ={()=>setMostrarCardapio(!mostrarCardapio)}>Cardapio</button>
            {mostrarCardapio && <div>
              <img src="./img foodtrack/coxinha.jpg" alt="" className={"cont-img1"}/>
              <br/>
              coxinha R$ 4.50
              <br/>
              <img src="./img foodtrack/" alt="" className={"cont-img1"}/>
              <br/>
              salsicha R$ 4.0
              <br/>
              <img src="./img foodtrack/quibe.jpg" alt="" className={"cont-img1"}/>
              quibe R$ 5.0
              <br/>
              empada R$ 5.0
            </div>}
            <br />
            Pedido <input type = "Number"
            value = {inputPedido}
            onChange = {(e)=> setInputPedido(e.target.value)}
            />
            <button onClick={'PedidoDoCardapio'}>Fazer Pedido</button>
        </div>
  )
}

export default CoxaoDoSantinho