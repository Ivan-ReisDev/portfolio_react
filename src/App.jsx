import './App.css'
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import ConteudoApre from './components/conteudoApre/ConteudoApre.jsx'
import Corpo from './components/corpo/Corpo.jsx'
import { useState } from 'react'



function App() {

  var storeLocal = localStorage.getItem('store')

  const [modoDark, setModoDark] = useState(storeLocal ? storeLocal === 'true' : false);

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
      
    </>
  )
}

export default App
