import './App.css'
import Props from './components/Props'
import foto from './assets/nature.png'

function App() {
  let aluno = 'Monicke'

  return (
    <>
      <Props nome={aluno} idade={18} foto={foto} descricao="Foto de umas maçãs" />
    </>

  )
}

export default App

