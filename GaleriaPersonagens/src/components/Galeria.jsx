import Card from './Card';
import personagem1 from '../assets/alegria.jpg';
import personagem2 from '../assets/tristeza.jpg';
import personagem3 from '../assets/nojinho.jpg';
import personagem4 from '../assets/vergonha.png';
import personagem5 from '../assets/ansiedade.png';
import personagem6 from '../assets/inveja.jpg';

const personagens = [
  {
    nome: 'Alegria',
    imagem: personagem1,
    descricao: 'Personagem Alegre',
  },
  {
    nome: 'Tristeza',
    imagem: personagem2,
    descricao: 'Personagem triste',
  },
  {
    nome: 'Nojinho',
    imagem: personagem3,
    descricao: 'Personagem nojinho',
  },
  {
    nome: 'Vergonha',
    imagem: personagem4,
    descricao: 'Personagem versonhoso',
  },
  {
    nome: 'Ansiedade',
    imagem: personagem5,
    descricao: 'Personagem ansioso',
  },
  {
    nome: 'Inveja',
    imagem: personagem6,
    descricao: 'Personagem invejoso',
  },
];

function Galeria({ onSelect }) {
  return (
    <div className="galeria">
      {personagens.map((p) => (
        <Card key={p.nome} personagem={p} onClick={onSelect} />
      ))}
    </div>
  );
}

export default Galeria;
