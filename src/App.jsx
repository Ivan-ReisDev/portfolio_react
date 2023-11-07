import './App.css'
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import ConteudoApre from './components/conteudoApre/ConteudoApre.jsx'
import { useState } from 'react'

function App() {
  
  return (
    <>
      <Header/>
      <Apresentacao/>
      <ConteudoApre/>
      <Sobre/>
    </>
  )
}

export default App
