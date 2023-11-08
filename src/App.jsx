import './App.css'
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import ConteudoApre from './components/conteudoApre/ConteudoApre.jsx'
import Corpo from './components/corpo/Corpo.jsx'
import { useState } from 'react'


function App() {

  const [modoDark, setModoDark] = useState(false)

  const updadeModoDark = (event) => {
    setModoDark(event)
  }
  const funcDark = () => modoDark

  return (
    <>
      <Header dark_mode={updadeModoDark}/>
      <Apresentacao funcDark={funcDark}/>
      <ConteudoApre />
      <Corpo funcDark={funcDark}/>
    </>
  )
}

export default App
