import {useEffect, useState } from 'react';

export default function TextoMudaCor() {
  const [texto, setTexto] = useState('');

  function handleColor(){
            const cor = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#835AFD"];
            const randomColor = cor[Math.floor(Math.random() * cor.length)];
            document.body.style.backgroundColor = randomColor;

    }

  useEffect(() => {
    handleColor()
  },[texto])


  return (
    <div style={{ padding: '20px' }}>
      <h2>Digite algo para mudar a cor de fundo:</h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite aqui..."
        className="caixa-texto"
      />
    </div>
  );
}
