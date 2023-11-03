import React from 'react'
import { FaGithubSquare, FaLinkedin, FaAngleDown, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import Programador from '../../assets/programador.png'

import './apresentacao.css'

const Apresentacao = () => {
  return (
    <>
      <div className='content-inicio '>
        <section className='content-left'>
          <div className='principal'>
            <div>
              <span>&#60; / &#62;</span>
              <h2 class="titulo">Desenvolvedor Web - <strong>Ivan Reis</strong></h2>
              <p>Seja bem-vindo, conheça alguns dos meus projetos.</p>
            </div>
            <div className='content-left-botton'>
              <a href="https://github.com/Ivan-ReisDev/" target='_blank' className='github'><FaGithubSquare /></a>
              <a href="https://www.linkedin.com/in/ivan-reis-b93b32248/" target='_blank' className='linkedin'><FaLinkedin /></a>
              <a href="https://www.instagram.com/ivan__reis/" target='_blank' className='instagram'><FaInstagramSquare/></a>
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5521985598348" target='_blank' className='whatsapp' ><FaWhatsappSquare/></a>
            </div>
          </div>
        </section>
        <section className='content-right'>
          <img src={Programador} alt="" />
        </section>
        <div className='btnFake'>
          <a href="#sobre"><FaAngleDown/></a>
        </div>
      </div>
    </>
  )
}

export default Apresentacao