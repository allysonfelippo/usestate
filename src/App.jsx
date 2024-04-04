import './App.css';

import { useState } from 'react';

function App() {
  const [name, setName] = useState('Allyson');
  const [number, setNumber] = useState(1)

  console.log(name)

  const changeNumber = () => {
    // previous value || previous state
    setNumber((prevNumber) => prevNumber + 1)
  }

  return <div className='App'>
    <h2>Meu nome é {name}</h2>
    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
    <div>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar número</button>
    </div>
  </div>
}

export default App
