import './App.css'
import { Analytics } from '@vercel/analytics/react';
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import ConteudoApre from './components/conteudoApre/ConteudoApre.jsx'
import Corpo from './components/corpo/Corpo.jsx'
import { useState } from 'react'



function App() {

  const storeLocal = localStorage.getItem('store');
  
  // Define o estado inicial como false (modo dia) se não houver nada armazenado, caso contrário, usa o valor armazenado
  const [modoDark, setModoDark] = useState(storeLocal ? storeLocal === 'true' : false);

  // Função para alternar entre os modos e atualizar o localStorage
  const updadeModoDark = () => {
    setModoDark((prevModoDark) => {
      const newModoDark = !prevModoDark;
      localStorage.setItem("store", newModoDark.toString());
      return newModoDark;
    });
  };

  return (
    <>
   
      <Header dark_mode={updadeModoDark} modoDark={modoDark} />
      <Apresentacao modoDark={modoDark} />
      <ConteudoApre />
      <Corpo modoDark={modoDark} />
      <Analytics />
      
    </>
  )
}

export default App
