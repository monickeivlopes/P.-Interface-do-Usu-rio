import { useState } from 'react'
import './EscopoReduz.css'

const EscopoReduz = ()  => {
    const [isActive, setIsActive] = useState(false)

    function handlePlayClick() {
        alert("Neymar")
        setIsActive(true)
    }

    return (
        <>
            <button onClick={() => console.log("Vc Clicou")}>Clique</button>

            <div>
                <button onClick={() => alert("Clicaste")}>Novo botão</button>
            </div>

            <div>
                <button onClick={() => alert("Clicaste de novo - handleClick")}>Botão 3</button>
            </div>

            <button 
                className={isActive ? "container active" : "container"} 
                onClick={handlePlayClick}
            >
                Opa aperta o play
            </button>
        </>
    )
}

export default EscopoReduz
