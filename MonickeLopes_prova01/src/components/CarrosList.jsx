
import carros from './dados_carros.js'; // Importa os dados do arquivo de carros

function CarrosList() {
  return (
    <ul>
      {carros.map((carros, index) => (
        <li key={index}>
          Modelo: {carros.modelo}, Ano: {carros.ano}
        </li>
      ))}
    </ul>
  );
}

export default CarrosList;

/* 
{carros.map((carro, index) => (
        <li key={index}>
          Modelo: {carro.modelo}, Ano: {carro.ano}
        </li>
))}

Aqui estou mapeando os dados da constante carros e manipulando (com map)
pela chave (key) para exibir os dados correspondentes


*/