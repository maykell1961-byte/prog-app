import {useState} from 'react'

function TrajetoPomar() {
  const[maca, setMaca] = useState('')
  const[laranja, setLaranja] = useState('')
  const[bergamota, setBergamota] = useState('')
  const[banana, setBanan] = useState('')
  const[pera, setPera] = useState('')
  const[inputTrajetoPomar, setTrajetoPomar] = useState('')
  const[resultado, setResultado] = useState('')
  function gerarRecibo(maca, laranja, bergamota, banana, pera){
    const precos = {
      maca: 1.50,
      laranja: 2.00,
      bergamota: 1.00,
      banana: 1.20,
      pera: 0.50
    };
    let total = 0;
    if(maca >0){
      setMaca('Maçã: ${maca}unidade(s)');
      total += maca * precos.maca;
    }

    if(laranja > 0){
      setLaranja('laranja: ${laranja}unidade(s)');
      total += laranja * precos.laranja;
    }

    if(bergamota > 0){
      setBergamota('Bergamota: ${bergamota}unidade(s)');
      total += bergamota * precos.bergamota;
    }

    if(banana > 0){
      setBanana('Banana: ${banana}unidade(s)');
      total += banana * precos.banana;
    }

    if(pera > 0){
      setPera('Pera: ${pera}unidade(s)');
      total += pera * precos.pera;
    }
    setResultado("total: R$" + total.toFixed(2));




  }
  return (
    <>
    TrajetoPomarV0 = <input type= "Number"
    value = {}
    onChange = {(e)=> setImmediate(e.target.value)}
    <button onClick = {gerarRecibo}>gera recibo</button>
    </>
  )
}

export default TrajetoPomarV0