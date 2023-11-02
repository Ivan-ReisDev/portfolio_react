import './App.css'
import Apresentacao from './components/apresentacao/Apresentacao'
import Header from './components/header/Header'
import Sobre from './components/sobre/Sobre'
import { useState } from 'react'



function App() {
  
  return (
    <>
      <Header/>
      <Apresentacao/>
      <Sobre/>
    </>
  )
}

export default App
