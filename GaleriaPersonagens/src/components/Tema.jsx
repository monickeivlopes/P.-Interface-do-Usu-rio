function Tema({ alternarTema, tema }) {
  return (
    <button onClick={alternarTema}>
      Mudar para {tema === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default Tema;
