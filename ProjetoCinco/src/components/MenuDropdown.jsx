
import React, { useState } from 'react';

function MenuDropdown() {
  const [aberto, setAberto] = useState(false);

  return (
    <div>
      <button onClick={() => setAberto(!aberto)}>
        Menu ▼
      </button>
      {aberto && (
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      )}
    </div>
  );
}

export default MenuDropdown;
