import { useEffect, useState } from "react";

export default function AlterarTema(){

  const [modoEscuro, definirModoEscuro] = useState(false);

  useEffect(() => {
    if (modoEscuro) {
      document.body.classList.add('modo-escuro');
      document.body.classList.remove('modo-claro');
    }
    else
      document.body.classList.add('modo-claro');
      document.body.classList.remove('modo-escuro');
      
  }, [modoEscuro]);

  function alterarTema(){
    definirModoEscuro(prev => !prev );
  }

  return(
    <div style={{ padding: '20px' }}>
      <h1>{modoEscuro ? 'Modo Escuro' : 'Modo Claro'}</h1>
      <button onClick={alterarTema}>
        Alternar Tema
      </button>
    </div>
  );
}