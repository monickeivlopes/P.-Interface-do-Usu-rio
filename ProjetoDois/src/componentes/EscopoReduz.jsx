const EscopoReduz = ()  => {
    function handleClick(){
        return(
            alert("Clicaste de novo - handleClick")
        )
    }
    return(
        <>
        <button  onClick={() => console.log("Vc Clicou")} >Clique</button>
        <div>
            <button onClick={() => alert("Clicaste")}>Novo botão</button>
        </div>

        <div>
            <button onClick={handleClick}>Botão 3</button>
        </div>
        </>
    )
}

export default EscopoReduz