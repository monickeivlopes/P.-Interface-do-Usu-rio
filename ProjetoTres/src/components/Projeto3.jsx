import { useState } from "react"
export default function Projeto3(){
    // let valor = 0
    let [valor,setValor] = useState(0)

    return(
        <>
        <h1>Bem vindo</h1>
        <div>
            <button onClick={() => {setValor(valor+1)}}>Cliques {valor}</button>
        </div> 
        </>
    )
}