import './App.css'
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import ConteudoApre from './components/conteudoApre/ConteudoApre.jsx'
import Corpo from './components/corpo/Corpo.jsx'
import { FaSun, FaMoon } from "react-icons/fa";
function App() {
  return (
    <>
      <Header/>
      <Apresentacao/>
      <ConteudoApre/>
      <Corpo/>
    </>
  )
}

export default App
