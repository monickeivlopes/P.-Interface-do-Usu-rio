import './App.css'
import { useState } from 'react'

function App() {

  const [number, setNumber]= useState(1);

  const changeNumber = () => {setNumber(number + 5)};
  
  return (
    <>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Clique</button>

    </>
  )
}

export default App
