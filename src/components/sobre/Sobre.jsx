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
            <p>Possuo experiência como auxiliar administrativo, o que me proporcionou uma compreensão sólida de
              como as empresas operam internamente. Recentemente, realizei uma transição de carreira para o
              desenvolvimento Full-Stack.
              Nos últimos 12 meses, tenho atuado como freelancer, com especialização nas seguintes tecnologias:
             <span> React, JavaScript (ES6), Node.js, TypeScript, Tailwind CSS e MongoDB.</span></p>
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='_blank' className='links'>Visitar Linkedin <span><FaArrowRight /></span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre