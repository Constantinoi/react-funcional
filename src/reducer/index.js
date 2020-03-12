import React,{ useState } from 'react';

import useStore from './somaReducer'


function ReducerHook() {

  const [ numero, setNumero ] = useState()
  const [ numero2, setNumero2 ] = useState()

  const [store, dispath] = useStore()
  

  const somar = ()=> {
    const numeroInt = parseInt(numero)
    const numero2Int = parseInt(numero2)
    console.log('dispachando a action')
    dispath({
        type: 'SOMA',
        payload: numeroInt + numero2Int 
    })
  }
  const subtrair = ()=> {
    const numeroInt = parseInt(numero)
    const numero2Int = parseInt(numero2)
    dispath({
        type: 'SUBTRACAO',
        payload: numeroInt - numero2Int 
    })
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
        <button onClick={subtrair}>Subtrai</button><br/>    
        Resultado:<br/>
        <input type="text" value={store.resultado} readOnly/><br/>
    </div>
  );
}

export default ReducerHook;
