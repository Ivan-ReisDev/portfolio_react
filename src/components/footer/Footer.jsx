import React from 'react'
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
import LogoIvan from '../../assets/logo_Ivan.png'
import './footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-info'>
            <div className="footer-um">
            <a href="#"><img src={LogoIvan} alt="" /></a>
            </div>
            <div className="footer-mapa">
              <h5>Mapa do Site</h5>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#sobre">Sobre</a></li>
                  <li><a href="#tecnologias">Tecnologias</a></li>
                  <li><a href="#projetos">Projetos</a></li>
                  <li><a href="#contato">Contato</a></li>

                </ul>
            </div>
            <div className="footer-contato">
              <h5>Contato</h5>
                <ul>
                  <li><a target='_blank' href="https://br.linkedin.com/"><FaLinkedin/></a></li>
                  <li><a target='_blank' href="https://github.com/Ivan-ReisDev"><FaGithubSquare/></a></li>
                  <li><a target='_blank' href="https://api.whatsapp.com/send?1=pt_BR&phone=5521985598348"><FaWhatsappSquare/></a></li>
                </ul>
            </div>

        </div>
        <div className="footer-creditos">
            <p>Copyright © 2023 - Todos os direitos reservados a Ivan Reis</p>
        </div>
        
    </div>
  )
}
