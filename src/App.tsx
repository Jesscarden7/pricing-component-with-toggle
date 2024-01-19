import { useState } from 'react';
import './App.css'
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {

  const [isAnual, setIsAnual] = useState(true);

  return (
    <div className='Wrapper'>
      <Header setIsAnual = {setIsAnual}/>
      <Main isAnual = {isAnual}/>
    </div>
  )
}

export default App
