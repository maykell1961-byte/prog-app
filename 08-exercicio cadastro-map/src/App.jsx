import { useState } from 'react'
const [produtos, setProdutos] = useState([
    {id: 0, nome:'Kichute' , preco:330, imagem:'👟'},
    {id: 1, nome:'pogoboll', preco:45, imagem:'⚽'},
    {id: 2, nome:'Tamagotchi', preco:22, imagem:'🦖'},
    {id: 3, nome:'genius', preco:100, imagem:'🧞'}
])
 
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
setProdutos([...produtos, produtoNovo])
setInputImagem('')
setInputNome('')
setInputPreco('')
}

return (
<div>

  <section>
    <h2></h2>
    <p></p>
  </section>
  
  <hr/>
  <h1></h1>
  <div className="cont-from">
  <h2></h2>
  <div className="input-container">
  <label htmlFor="">imagem</label>
  <input type="text"
  value={inputImagem}
  onChange={(e) => setInputImagem(e.target.value)}
  />
   <img src="./img foodtrack/gaucho.webp" alt="" className={"cont-img"}/>
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
)
}
export default App
