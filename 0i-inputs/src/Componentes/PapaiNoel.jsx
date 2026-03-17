import {useState} from 'react'

function PapaiNoel() {
    const[inputNum, setInputNum] = useState ("")
    const[frase,setfrase] = useState ("")
    // const[resultado, setResultado] = useState ("")
    // usar o for meste caso contar as vezes de Ho!
    function HoHoHo(){
        let n = Number(inputNum)
        let texto = ''
        for(let i = 0; i<n; i++){
            texto += 'Ho!'
        }
        setfrase(texto)
        // let qtdDeHo = inputEscrito + inputHoHoHo;
        // setResultado("Ho!"+ qtdDeHo)
    }
    return (
        <>
        <h1>Papai Noel disse HOHOHO!</h1>
        papel escrito = <input type = "text"
        value = {inputNum}
        onChange = {(e)=> setInputNum (e.target.value)}
        />
         
         {/* HoHoHo = <input type = "HoHoHo!"
         value = {inputHoHoHo}
         onChange = {(e)=> setInputHoHoHo (e.target.value)}
         /> */}

         <button onClick = {HoHoHo}>risado do Papai Noel</button>
         {/* {resultado} */}
         {frase}

            
        </>
    )
}

export default PapaiNoel
