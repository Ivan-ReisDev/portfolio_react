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
            <p>Apaixonado por TI, em busca constante de conhecimento, aprendendo sempre novas linguagens, afim de me aperfeiçoar e poder oferecer o melhor aos meus clientes. Atuando na área desde 2022, especializado em desenvolvimento front-end, com foco em desenvolvimento em JavaScript, React, Python, dentre outras tecnologias que uso para criar aplicações web de alto nível e valor, cursando análise e desenvolvimento de sistemas.</p>
            <p>Disposto e apto para superar novos desafios.</p>
            <a href="#" className='links'>Visitar Linkedin <span><FaArrowRight/></span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre