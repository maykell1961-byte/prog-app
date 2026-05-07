import './CardProduto.css'

function CardProduto(prop) {
    return (
        <div className="cont-card">
        
        <p className='imagem = Produto'>{prop.p.imagem}</p>
        <h2>{prop.p.nome}</h2>
       {/*} <p>{prop.p.preço.toFixed(2)}</p>*/}
        <p>R${prop.p.preco.toFixed(2).replace('.',',')}</p> {/*toFixed() quantas casas decimais/
         replace o da esquerda que quer retire, o da direta substitui*/}

            
        </div>
    )
}

export default CardProduto
