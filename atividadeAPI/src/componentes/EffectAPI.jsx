import { useState, useEffect } from 'react';
import './style.css'; 

export default function EffectAPI() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [fetchNames, setFetchNames] = useState(false);
  const [fetchUsernames, setFetchUsernames] = useState(false);
  const [fetchCities, setFetchCities] = useState(false);

  const buscarDados = async () => {
    setCarregando(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    if (fetchNames) {
      buscarDados();
      setFetchNames(false);
    }
  }, [fetchNames]);

  useEffect(() => {
    if (fetchUsernames) {
      buscarDados();
      setFetchUsernames(false);
    }
  }, [fetchUsernames]);

  useEffect(() => {
    if (fetchCities) {
      buscarDados();
      setFetchCities(false);
    }
  }, [fetchCities]);

  return (
    <div className="container-wrapper"> 
      <h1 className="main-title">Usuários da API</h1> 

      {carregando && <p className="loading-message">Carregando...</p>} 

      <div className="tables-container"> 
        {/* Tabela de Nomes */}
        <div className="table-name"> 
          <h2 className="table-title">Nomes</h2> 
          <button
            onClick={() => setFetchNames(true)}
            className="button-name" 
          >
            Buscar Nomes
          </button>
          <div className="table-wrapper"> 
            <table className="data-table"> 
              <thead className="table-header-blue"> 
                <tr>
                  <th className="table-th table-th-blue">Nome</th> 
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="table-row"> 
                    <td className="table-td">{u.name}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Usernames */}
        <div className="table-username">
          <h2 className="table-title">Usernames</h2> 
          <button
            onClick={() => setFetchUsernames(true)}
            className="button-username"
          >
            Buscar Usernames
          </button>
          <div className="table"> 
            <table className="data-table"> 
              <thead className="table-header-green"> 
                <tr>
                  <th className="table-th table-th-green">Username</th> 
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="table-row"> 
                    <td className="table-td">{u.username}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabela de Cidades */}
        <div className="table-cidade"> 
          <h2 className="table-title">Cidades</h2> 
          <button
            onClick={() => setFetchCities(true)}
            className="button-cidade" 
          >
            Buscar Cidades
          </button>
          <div className="table-wrapper"> 
            <table className="data-table"> 
              <thead className="table-header-purple"> 
                <tr>
                  <th className="table-th table-th-purple">Cidade</th> 
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.id} className="table-row"> 
                    <td className="table-td">{u.address.city}</td> 
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
