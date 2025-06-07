function Frase(props){

    return(
        <>
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <h3>Idade: {props.idade} </h3>
        </div>
        </>
    )
}


export default Frase