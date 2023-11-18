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
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Tecnologias</a></li>
                  <li><a href="#">Projetos</a></li>
                  <li><a href="#">Contato</a></li>

                </ul>
            </div>
            <div className="footer-contato">
              <h5>Contato</h5>
                <ul>
                  <li><a href="#"><FaLinkedin/></a></li>
                  <li><a href="#"><FaGithubSquare/></a></li>
                  <li><a href="#"><FaWhatsappSquare/></a></li>
                </ul>
            </div>

        </div>
        <div className="footer-creditos">
            <p>Copyright © 2023 - Todos os direitos reservados a Ivan Reis</p>
        </div>
        
    </div>
  )
}
