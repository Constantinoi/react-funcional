import React,{ useState } from 'react';


function UseState() {

  const [ numero, setNumero ] = useState()
  const [ numero2, setNumero2 ] = useState()
  const [ result, setResult ] = useState()

  const somar = ()=> {
    const numeroInt = parseInt(numero)
    const numero2Int = parseInt(numero2)

    setResult(numeroInt + numero2Int)
  }
  return (
    <div>
        Numero 1:<br/>
        <input type="text" 
              value={numero}
              onChange={e=> setNumero(e.target.value)}/><br/>

        Numero 2:<br/>
        <input type="text" 
               value={numero2}
               onChange={e=> setNumero2(e.target.value)}/><br/>

        <button onClick={somar}>Somar</button><br/>    
        Resultado:<br/>
        <input type="text" value={result}/><br/>
    </div>
  );
}

export default App;
