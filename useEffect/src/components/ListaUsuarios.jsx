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

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().startsWith(filtro.toLowerCase())
  );

  return (
    <div className="container-lista">
      <h2>Lista de Usuários</h2>

      <input
        type="text"
        className="campo-filtro"
        placeholder="Filtrar por inicial do nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <ul className="lista-usuarios">
        {usuariosFiltrados.map(usuario => (
          <li key={usuario.id} className="item-usuario">
            <strong>{usuario.name}</strong><br />
            📧 {usuario.email}<br />
            🏙️ {usuario.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
