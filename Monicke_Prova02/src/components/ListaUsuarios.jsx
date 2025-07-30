import { useEffect, useState } from 'react';
import './ListaUsuarios.css';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
      .catch(erro => console.error('Erro ao buscar usuários:', erro));
  }, []);

  const usuariosFiltrados = usuarios.filter(usuario => usuario.id.toString().startsWith(filtro.toString())); 
  // mesma logica que usei na lista para filtrar nomes 

  async function buscarTarefas() {
    setCarregar(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTarefas(data);
    } catch (error) {
      console.error("Erro:", error);
      
    } finally {
      setCarregar(false);
    }
  }

  // Sinto que me perdi nessa parte da api mas não estou conseguindo indentificar o que falta

  return (
    <div className="container-lista">

      <button className='botao-recarregar' onClick={buscarTarefas}>Recarregar API</button>

      <h2>Lista de Usuários</h2>

      <input
        type="text"
        className="campo-filtro"
        placeholder="Filtrar por ID"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ul className="lista-usuarios">
        {usuariosFiltrados.map(usuario => (
          <li key={usuario.id} className="item-usuario">
            <strong>ID: {usuario.id} </strong> <br></br>
            <strong>{usuario.name}</strong><br />
            {usuario.email}<br />
            {usuario.address.city}
          </li>
        ))}
      </ul>

    </div>
  );
}
