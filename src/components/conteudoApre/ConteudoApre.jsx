import React from 'react'
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";

import './ConteudoApre.css'
const ConteudoApre = () => {


  return (
    <div className='apresentacao'>
      <div className="content-left">
        
        <h4>Portfólio</h4>
        <h2>Ivan Reis</h2>
        <div className='cargo'>
          <p>Desenvolvedor Full-Stack</p>
        </div>
        <div className='icons'>
          <a href="#" target='_blank' className='linkedin'><FaLinkedin /></a>
          <a href="#" target='_blank' className='github'><FaGithubSquare /></a>
          <a href="#" target='_blank'className='whatsapp' ><FaWhatsappSquare /></a>
        </div>
      </div>
    </div>
  )
}

export default ConteudoApre