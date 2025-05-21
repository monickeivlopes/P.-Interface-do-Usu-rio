
export default function Props(props){ 
    return(
        <>
            <h1>Olá, {props.nome}</h1>
            <h2>Sua idade é {props.idade}</h2>
            <figure>
                <img src={props.foto} alt={props.nome} />
                <figcaption>{props.descricao}</figcaption>
            </figure>
        </>

    );

}