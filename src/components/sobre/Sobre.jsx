import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Google from '../../assets/Programmer-rafiki.png'
import './sobre.css'

const Sobre = () => {

  return (
    <>
      <section className='sobre' id='sobre'>
        <div className='content-sobre'>
          <div className="img">
            <img src={Google} alt="" />
          </div>

          
          <div className="paragrafo">
            <h3>Sobre mim</h3>
            <p>Entusiasta de Tecnologia da Informação, estou constantemente em busca de aprimoramento e conhecimento, explorando continuamente novas linguagens. Minha paixão é oferecer o melhor aos meus clientes. Atuo na área desde 2022, especializando-me no desenvolvimento front-end, com expertise em JavaScript, React, Python, e outras tecnologias para criar aplicações web de alta qualidade e valor. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas. Estou pronto e motivado para enfrentar novos desafios.</p>
            <a href="#" className='links'>Visitar Linkedin <span><FaArrowRight/></span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre