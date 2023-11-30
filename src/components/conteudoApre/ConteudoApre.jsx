import React from 'react'
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";

import './ConteudoApre.css'
const ConteudoApre = () => {


  return (
    <div className='apresentacao' id='home' >
      <div className="content-left">
        
        <h4>Portfólio</h4>
        <h2>Ivan Reis</h2>
        <div className='cargo'>
          <p>Desenvolvedor Full-Stack</p>
        </div>
        <div className='icons'>
          <a href="https://br.linkedin.com/" target='_blank' className='linkedin'><FaLinkedin /></a>
          <a href="https://github.com/Ivan-ReisDev" target='_blank' className='github'><FaGithubSquare /></a>
          <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5521985598348" target='_blank'className='whatsapp' ><FaWhatsappSquare /></a>
        </div>
      </div>
    </div>
  )
}

export default ConteudoApre