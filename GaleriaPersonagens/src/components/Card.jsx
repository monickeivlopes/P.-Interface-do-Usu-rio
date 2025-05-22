function Card({ personagem, onClick }) {
  return (
    <div className="card" onClick={() => onClick(personagem)}>
      <img src={personagem.imagem} alt={personagem.nome} />
      <h3>{personagem.nome}</h3>
    </div>
  );
}

export default Card;
