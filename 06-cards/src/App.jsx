import {useState} from 'react' 
import './App.css'
import CardProduto from './components/CardProduto';
function App() {
  const [produtos, setProdutos] = useState([
      {id: 0, nome:'Kichute' , preco:330, imagem:'👟'},
      {id: 1, nome:'pogoboll', preco:45, imagem:'⚽'},
      {id: 2, nome:'Tamagotchi', preco:22, imagem:'🦖'},
      {id: 3, nome:'genius', preco:100, imagem:'🧞'}
  ])
   
  const [cavalos, setcavalos] = useState([
    {
     id: 1, 
     nome: "Trovão",
     raca: "Mangalarga Marchado", 
     idade: 5,
     pelagem: "Tordilho"
    },
    {
     id: 2, 
     nome: "Pérola",
     raca: "Quarto de Milha", 
     idade: 4,
     pelagem: "Alazã"
    },
    {
     id: 3, 
     nome: "Espírrito",
     raca: "Mustang", 
     idade: 7,
     pelagem: "Baio"
    },
    {
     id: 4, 
     nome: "apolo",
     raca: "Puro Sangue Inglês", 
     idade: 6,
     pelagem: "Castanho"
    },
    {
     id: 5, 
     nome: "Luna",
     raca: "Appaloosa", 
     idade: 3,
     pelagem: "Sardenta"
    },
    {
     id: 6, 
     nome: "Barão",
     raca: "Crioulo", 
     idade: 10,
     pelagem: "Zaino"
    },
    {
     id: 7, 
     nome: "Zéfiro",
     raca: "Lusitano", 
     idade: 8,
     pelagem: "Branco"
    },
    {
     id: 8, 
     nome: "Fagulha",
     raca: "àrabe", 
     idade: 5,
     pelagem: "Preto"
    },
    {
     id: 9, 
     nome: "Diamante",
     raca: "Andaluz", 
     idade: 9,
     pelagem: "Cinza"
    },
    {
     id: 10, 
     nome: "Cigana",
     raca: "Campolina", 
     idade: 4,
     pelagem: "Pampa"
    }
  ])

  const[carros, setCarros] = useState([
    {
      id: 1, 
      modelo: "Fusca 1300", 
      marca: "Volkswagen", 
      ano: 1974, 
      cor: "Azul Pastel", 
      quilometragem: 45000
  },
    {
      id: 2, 
      modelo: "Mustang fastbck", 
      marca: "Ford", 
      ano: 1967, 
      cor: "Preto", 
      quilometragem: 12000
  },
    {
      id: 3, 
      modelo: "Opala Diplomata", 
      marca: "Chevrolet", 
      ano: 1988, 
      cor: "Cinza Metálico", 
      quilometragem: 82000
  },
    {
      id: 4, 
      modelo: "Delorean DMC-12", 
      marca: "Delorean", 
      ano: 1981, 
      cor: "Aço Escovado", 
      quilometragem: 5000
  },
    {
      id: 5, 
      modelo: "F-40", 
      marca: "Ferrari", 
      ano: 1987, 
      cor: "Vermelho Corsa", 
      quilometragem: 2500
  },
    {
      id: 6, 
      modelo: "Maverick GT", 
      marca: "Ford", 
      ano: 1975, 
      cor: "Laranja", 
      quilometragem: 67000
  },
    {
      id: 7, 
      modelo: "911 Carrera", 
      marca: "Porsche", 
      ano: 1993, 
      cor: "Branco", 
      quilometragem: 31000
  },
    {
      id: 8, 
      modelo: "Kombi Corujimha", 
      marca: "Volkswagem", 
      ano: 1962, 
      cor: "Aço Escovado", 
      quilometragem: 5000
  },
    {
      id: 9, 
      modelo: "Charger RT", 
      marca: "Dodge", 
      ano: 1971, 
      cor: "Amarelo", 
      quilometragem: 54000
  },
    {
      id: 10, 
      modelo: "Shelby Cobra", 
      marca: "AC Cars", 
      ano: 1965, 
      cor: "Azul com faixa Brancas", 
      quilometragem: 1800
  },
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
        <h2>Cavalos</h2>
        <p>Façam aqui o map de cavalos bem bonitinhos 67</p>
      </section>

      <hr/>
      <h1>Cards de coisas</h1>
      <div className="cont-from">
      <h2>cards das coisas</h2>
      <div className="input-container">
      <label htmlFor="">imagem</label>
      <input type="text"
      value={inputImagem}
      onChange={(e) => setInputImagem(e.target.value)}
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
