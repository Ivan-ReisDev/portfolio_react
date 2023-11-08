import React from 'react'
import Sobre from '../sobre/Sobre'
import './corpo.css'

const Corpo = (props) => {
 
  const modo = props.funcDark()

  return (
    <div className={ modo ? "corpo" : "dark"}>
        <Sobre/>
    </div>
  )
}

export default Corpo