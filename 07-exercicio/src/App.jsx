import { useState } from 'react'

import './App.css'

function App() {

  const [compras, setCompras] = useState([
    { id: 600, nome: "Mouse Gamer RGB", preco: 15.50, quantidade: 2, valorTotal: 31.00 },
    { id: 601, nome: "Café Espresso (Cápsula)", preco: 8.90, quantidade: 5, valorTotal: 44.50 },
    { id: 602, nome: "Teclado Mecânico", preco: 120.00, quantidade: 1, valorTotal: 120.00 },
    { id: 603, nome: "Camiseta Tech", preco: 45.00, quantidade: 3, valorTotal: 135.00 },
    { id: 604, nome: "Caneta Gel Preta", preco: 2.50, quantidade: 10, valorTotal: 25.00 },
    { id: 605, nome: "Suporte para Notebook", preco: 19.99, quantidade: 2, valorTotal: 39.98 },
    { id: 606, nome: "Monitor 24 Pol", preco: 350.00, quantidade: 1, valorTotal: 350.00 },
    { id: 607, nome: "Cabo HDMI 2m", preco: 12.00, quantidade: 4, valorTotal: 48.00 },
    { id: 608, nome: "Bloco de Notas", preco: 7.25, quantidade: 6, valorTotal: 43.50 },
    { id: 609, nome: "Headset com Microfone", preco: 89.90, quantidade: 2, valorTotal: 179.80 },
    { id: 610, nome: "Pilha Alcalina AAA", preco: 5.00, quantidade: 8, valorTotal: 40.00 },
    { id: 611, nome: "Mousepad Speed", preco: 27.30, quantidade: 3, valorTotal: 81.90 },
    { id: 612, nome: "Webcam Full HD", preco: 150.00, quantidade: 2, valorTotal: 300.00 }
  ]);

    const[inputImagem, setInputImagem] = useState('')
    const[inputNome, setInputNome] = useState('')
    const[inputPreco, setInputPreco] = useState('')
  

    function cadastrar(){
      let produtoNovo = {
        id: Date.now(), 
        nome: inputNome,
        preço: Number(inputPreco),
        imagem: inputImagem
       }
      setProdutos([...produtos, produtoNovo])('')
      setInputNome('')
      setInputPreco('')
      setInputQuantidade('') 
      setInputValorTotal('')
    }
  return (
    <> 
    
    <div>

    <section>
      <h2>Compras</h2>
      <p>Façam aqui o map de compras</p>
    </section>
    />
    </div>
    <div className="input-container">
    <label htmlFor="">nome</label>
    <input type="text"
    value={inputNome}
    onChange={(e) => setInputNome(e.target.value)}
    />
    </div>
    <div className="input-container">
    <label htmlFor="">preço</label>
    <input type="text"
    value={inputPreco}
    onChange={(e) => setInputPreco(e.target.value)}
    />
    </div>
    <h1>Cards de coisas</h1>
    <div className="cont-from">
    <h2>cards das coisas</h2>
    <div className="input-container">
    <label htmlFor="">quantidade</label>
    <input type="text"
    value={inputQuantidade}
    onChange={(e) => setInputQuantidade(e.target.value)}
    />
     </div>
    <h1>Cards de coisas</h1>
    <div className="cont-from">
    <h2>compras</h2>
    <div className="input-container">
    <label htmlFor="">valorTotal</label>
    <input type="text"
    value={inputValoToatal}
    onChange={(e) => setInputvalorTotal(e.target.value)}
    />
    <button onClick={cadastrar}>cadastrar</button>
    </div>
    <div className="ListaCards">
   {
     produtos.map((produto) => (
       <CardProduto p={produto} key={produto.id}/>
     ))
   }
    </div>
  </div>
      
    </>
  )
}

export default App
