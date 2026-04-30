import {useState} from 'react' 
import './App.css'
import CardProduto from './components/CardProduto';

function App() {
  const [produtos, setProdutos] = useState([
    {id: 0, nome: 'Kichute', preço: 333, imagem: '👟'},
    {id: 1, nome: 'Monareta', preço: 654, imagem: '🚲'},
    {id: 2, nome: 'Tamagotchi', preço: 22, imagem: '😁'},
    {id: 3, nome: 'Genius', preço: 100, imagem: '😊'}
 ])

 function cadastrar(){
   let produtoNovo = {id: Date.now(), nome: 'Pogobol', preço: 10, imagem: '😊'}
   setProdutos([...produtos, produtoNovo])
 }
 
  return (
    <div>
      <h1>Cards de coisas</h1>
      <button onClick={cadastrar}>+</button>
      <div className="ListaCards">
     {
       produtos.map((produto) => (
         <CardProduto p={produto} key={produto.id} />
       ))
     }
      </div>
    </div>
  )
}

export default App
