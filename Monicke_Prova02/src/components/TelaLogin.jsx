import { useState } from 'react';
import './TelaLogin.css';

export default function TelaLogin() {
  const [dados, setDados] = useState({
    usuario: '',
    senha: ''
  });

  function handleChange(evento) {
    const { name, value } = evento.target;

    setDados((valoresAtuais) => ({
      ...valoresAtuais,
      [name]: value
    }));
  }


  function handleSubmit(evento) {
    evento.preventDefault(); 
    console.log('Usuário:', dados.usuario);
    console.log('Senha:', dados.senha);
  }

 return (
    <form onSubmit={handleSubmit} className="container-login">
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="usuario">Usuário:</label>
        <input
          type="text"
          id="usuario"
          name="usuario"
          value={dados.usuario}
          onChange={handleChange}
          placeholder="Digite seu usuário"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={dados.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
          required
        />
      </div>

      <button type="submit" className="botao-login">Entrar</button>
    </form>
  );
}



