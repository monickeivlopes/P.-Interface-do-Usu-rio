import { useState } from 'react';
import './App.css';
import Galeria from './components/Galeria';
import Detalhes from './components/Detalhes';
import Tema from './components/Tema';

function App() {
  const [tema, setTema] = useState('light');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const alternarTema = () => {
    setTema((tema) => (tema === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${tema}`}>
      <h1>Galeria de Personagens</h1>
      <Tema alternarTema={alternarTema} tema={tema} />
      <Galeria onSelect={setPersonagemSelecionado} />
      {personagemSelecionado && (
        <Detalhes personagem={personagemSelecionado} />
      )}
    </div>
  );
}

export default App;
