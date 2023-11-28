import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3, FaHtml5, FaPython } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import Burguer from '../../assets/burguer.png'
import Calcule from '../../assets/calculeaqui.png'
import Estoque from '../../assets/sistemadeestoque.png'
import Gerador from '../../assets/geradordesenha.png'
import TheBoys from '../../assets/ld_theBoys.png'
import GeradordePDF from '../../assets/geradordepdf.png'
import Responsivo from '../../assets/projetoResponsivo.png'
import Jokenpo from '../../assets/jokenpo.png'

import './projetos.css'

const Projetos_main = () => {

  const cards = [
    {
      id:1,
      titulo: 'Hamburgueria',
      legenda: 'Esse site é resultado do uso das mais recentes tecnologias web - HTML5, CSS3 e Javascript. Este projeto acadêmico visa aprimorar habilidades no desenvolvimento de landing pages. 🚀🍔',
      tags: '#WebDevelopment #HTML5 #CSS3 #Javascript #AprendizadoConstante',
      tecnologias: [<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      github: 'https://github.com/Ivan-ReisDev/hamburgueria',
      site: 'https://hamburgueria-navy.vercel.app/',
      img: Burguer
    },

    {
      id:2,
      titulo: 'Calcule Aqui',
      legenda: 'Facilitando a vida de contadores e usuários que precisam conferir valores de boletos atrasados. Nosso site, foi desenvolvido com Javascript, HTML5 e CSS3, proporciona uma experiência intuitiva e eficiente. 💰🖥️',
      tags:'#FacilidadeFinanceira #WebDevelopment #Contabilidade',
      tecnologias: [<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      github: 'https://github.com/Ivan-ReisDev/calculadora-de-boleto',
      site: 'https://calculadora-de-boleto.vercel.app/',
      img: Calcule
    },

    {
      id:3,
      titulo:'Sistema de Estoque',
      legenda:'Desenvolvido com Python, SQLite, Tkinter e CustonTkinter, nossa ferramenta visa simplificar a gestão de estoque para os gestores. Oferece controle completo de inventário e precificação, proporcionando eficiência e praticidade. 📦💻 ',
      tags:'#GestãoDeEstoque #DesenvolvimentoPython #EficiênciaEmpresarial',
      tecnologias:[<FaPython />, <SiSqlite/>],
      github:'https://github.com/Ivan-ReisDev/sistemaCRUD',
      site:'#',
      img: Estoque,
    },


  {
      id:4,
      titulo:'Gerador de Senha',
      legenda:'Promovendo a segurança online de forma simples e eficaz. Desenvolvido com Javascript, HTML5 e CSS3, nosso site é uma ferramenta essencial para fortalecer as senhas dos usuários na internet. 🔐💻',
      tags:'#SegurançaOnline #GeradorDeSenhas #WebDevelopment',
      tecnologias:[<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      github:'https://github.com/Ivan-ReisDev/SiteGeradorDeSenha',
      site:'https://site-gerador-de-senha.vercel.app/',
      img: Gerador,
    },
 
    {
      id:5,
      titulo:'Landing Page',
      legenda:'Landing Page Acadêmica Uma página de destino de cunho acadêmico, moldada com as tecnologias mais recentes - HTML5 e CSS3. Explore o conhecimento de forma atraente e moderna. 🎓💻',
      tags:'#AcademicWebsite #HTML5 #CSS3 #InovaçãoEducacional',
      tecnologias:[<FaCss3 />, <FaHtml5 />],
      github:'https://github.com/Ivan-ReisDev/leading-page-theboys',
      site:'https://leading-page-theboys.vercel.app/',
      img:TheBoys,
    },

    {
      id:6,
      titulo:'Gerador de PDF',
      legenda:'Simplificando a emissão de extratos de pagamento para imobiliárias. Desenvolvido em Javascript com a poderosa biblioteca jsPDF, nosso gerador visa proporcionar facilidade e eficiência na vida do usuário. 📄💻',
      tags:'#FacilitandoPagamentos #Javascript #jsPDF #EficiênciaOperacional',
      tecnologias:[<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      github:'https://github.com/Ivan-ReisDev/GeradorDePDF-',
      site:'https://gerador-de-pdf.vercel.app/',
      img: GeradordePDF,
    },
  
    {
      id:7,
      titulo:'Projeto responsivo',
      legenda:'Projeto Acadêmico do Curso de Fundamentos Web Frontend: HTML, CSS e JS + 10 Projetos. Focado no desenvolvimento de técnicas responsivas, esta iniciativa foi concretizada através do uso de HTML5 e CSS3. 🚀💻',
      tags:'#DesenvolvimentoWeb #FrontendFundamentals #HTML5 #CSS3',
      tecnologias:[<FaCss3 />, <FaHtml5 />],
      github:'https://github.com/Ivan-ReisDev/responsivo',
      site:'https://responsivo-nine.vercel.app/',
      img:Responsivo,
    },

    {
      id:8,
      titulo:'Jokenpo',
      legenda:'Uma criação divertida em Javascript, HTML5 e CSS3, desenvolvida como parte do curso introdutório de Javascript do "Curso em Vídeo". Uma maneira lúdica de aprimorar e aplicar os conhecimentos recém-adquiridos. 🎮💡',
      tags:' #DesenvolvimentoJavascript #HTML5 #CSS3 ',
      tecnologias:[<IoLogoJavascript />, <FaCss3 />, <FaHtml5 />],
      github:'https://github.com/Ivan-ReisDev/Jokenpo',
      site:'https://jokenpo-three-sage.vercel.app/',
      img:Jokenpo,
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
                   <ul className='ul-projetos'> 
                   {itens.tecnologias.map((tecnologias, index) => <li key={index} className='icon-projeto'>{tecnologias}</li> )}
                   </ul>
                </div>
                <div className='footer-links-projetos'>
                  <div>
                    <a href={itens.github} target='_blank'>Visitar Github</a>
                  </div>
                  <div>
                    <a href={itens.site} target='_blank'>Visitar Site</a>
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