import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import Burguer from '../../assets/burguer.png'
import Calcule from '../../assets/calcule-aqui.jpg'
import Estoque from '../../assets/estoque.jpg'
import Gerador from '../../assets/gerador-de-senha.jpg'
import Pdf from '../../assets/geradordepdf.jpg'
import Ld from '../../assets/ld.jpg'
import Responsivo from '../../assets/responsivo.jpg'
import Monitor from '../../assets/monitor.png'
import './projetos.css'

const Projetos_main = () => {

  const cards = [
    {
      id:1,
      titulo: 'Hamburgueria',
      legenda: 'Esse site é resultado do uso das mais recentes tecnologias web - HTML5, CSS3 e Javascript. Este projeto acadêmico visa aprimorar habilidades no desenvolvimento de landing pages. 🚀🍔',
      tags: '#WebDevelopment #HTML5 #CSS3 #Javascript #AprendizadoConstante',
      tecnologias: [<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      img: Burguer
    },

    {
      id:1,
      titulo: 'Calcule Aqui',
      legenda: 'Esse site é resultado do uso das mais recentes tecnologias web - HTML5, CSS3 e Javascript. Este projeto acadêmico visa aprimorar habilidades no desenvolvimento de landing pages. 🚀🍔',
      tags: '#WebDevelopment #HTML5 #CSS3 #Javascript #AprendizadoConstante',
      tecnologias: [<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      img: Calcule
    }

  ];
  return (

    <section id='projetos' className='projetos'>
      <div className='projetos-title'>
        <h3>Meus Projetos</h3>
      </div>
      <div className="galeriaPai">
        {cards.map((itens) => (
          <div key={itens.id} className="card-Projetos">
            <div className="card-Projetos-Img">
              <img className='img-monitor' src={itens.img} alt="" />
            </div>
            <div className="card-Projetos-info">
              <div className='title-card-projeto'>
                <h4> <span><BiSolidRightArrow /></span> {itens.titulo}</h4>
              </div>
              <div className='infoCard'>
                <p>{itens.legenda} <strong>{itens.tags}</strong></p>
              </div>
              <div className='card-footer'>
                <div className='card-footer-tec'>
                  <span>Tecnologias usadas</span>
                  <ul>
                   <li className='icon-projeto'>{itens.tecnologias}</li>  
                  </ul>
                </div>
                <div className='footer-links-projetos'>
                  <div>
                    <a href="#">Visitar Github</a>
                  </div>
                  <div>
                    <a href="#">Visitar Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}

      </div>


    </section>
  )
}

export default Projetos_main