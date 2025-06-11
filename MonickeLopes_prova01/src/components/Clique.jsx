import { useState } from "react"
export default function Clique(){ //função 

    let [valor,setValor] = useState(0) //Criando um valor estático para o contador

    return(
        <>
        <div>
            <button id="botao" className="aumentar" onClick={() => {setValor(valor+1)}}> + </button> 
        
            <div className="campo">{valor}</div>

            <button id="botao" className="diminuir" onClick={() => {setValor(valor-1)}}> - </button>

        </div> 
        
        </>
    )
}

/*
<button id="botao" className="aumentar" onClick={() => {setValor(valor+1)}}> + </button> 

Ultilizando o evento onClick para quando clicar nesse 
botão ele incementar 1 ao valor já existente*/


/*
<div className="campo">{valor}</div>

Criando uma div para exibir a quantd de cliques
*/

/*
<button id="botao" className="diminuir" onClick={() => {setValor(valor-1)}}> - </button>

Ultilizando o evento onClick para quando clicar nesse 
botão ele  1 ao valor já existente
*/



