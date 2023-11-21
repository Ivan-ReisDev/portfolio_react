import React, { useState } from 'react'
import { BsChevronCompactDown } from "react-icons/bs";

import './slide.css'

const infoCards = [
  { 
    id:1,
    linguagem:'Javascript',
    legenda: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web',
    img: 'https://logospng.org/download/javascript/logo-javascript-256.png'
  },

  {
    id:2,
    linguagem:'React',
    legenda: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
    img: 'https://logospng.org/download/react/logo-react-256.png'
  },

  {
    id:3,
    linguagem:'Node.js',
    legenda: 'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.',
    img:'https://logospng.org/download/node-js/logo-node-js-512.png'
  },

  {
    id:4,
    linguagem:'Python',
    legenda: 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },

  {
    id:5,
    linguagem:'MySQL',
    legenda:'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.',
    img:'https://logospng.org/download/mysql/mysql-256.png'
  }, 
  
  {
    id:6,
    linguagem:'HMTL5',
    legenda:'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo. ',
    img:'https://logospng.org/download/html-5/logo-html-5-256.png'
  },

  {
    id:7,
    linguagem:'CSS3',
    legenda:'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.',
    img:'https://logospng.org/download/css-3/logo-css-3-256.png'
  },

  {
    id:8,
    linguagem:"Bootstrap",
    legenda: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
    img:'https://logospng.org/download/bootstrap/bootstrap-256.png'

  },

  {
    id: 9,
    linguagem:'SQLite',
    legenda:"SQLite é uma biblioteca em linguagem C que implementa uma base de dados SQL embutida. Programas que usem a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado.",
    img:'https://logospng.org/download/sqlite/sqlite-256.png'

  }


]

const Slide = () => {
  const [cardClick, setCardClick] = useState(0)

  

  const cardExib = (cardNumb) => {
    setCardClick(cardClick === cardNumb ? 0 : cardNumb);
  }
  return (
    <>
      {infoCards.map((itens) => (
                <div key={itens.id} className={cardClick == itens.id ? 'card active-card' : 'card'}>
                <div className='card-logo'>
                    <img src={itens.img} alt="" />
                </div>
                <div className={cardClick == itens.id  ? 'legenda' : 'legenda-none'} >
                  <div className='legenda-title'>
                     <h4>{itens.linguagem}</h4>
                  </div>
                  <div className='legenda-legenda'>
                    <p>{itens.legenda}</p>
                  </div>
                </div>
                <button onClick={() => cardExib(itens.id)}><BsChevronCompactDown/></button>
            </div>
      ))}

    </>
  )
}

export default Slide