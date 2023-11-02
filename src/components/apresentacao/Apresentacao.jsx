import React from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
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
              <a href="https://github.com/Ivan-ReisDev/" target='_blank'><FaGithubSquare /></a>
              <a href="https://www.linkedin.com/in/ivan-reis-b93b32248/" target='_blank' className='linkedin'><FaLinkedin /></a>
            </div>
          </div>
        </section>
        <section className='content-right'>
          <img src={Programador} alt="" />

        </section>
      </div>
    </>
  )
}

export default Apresentacao