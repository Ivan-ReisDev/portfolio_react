import React from 'react'
import { useState} from 'react';
import { FaBars, FaMixer, FaPhoneAlt  } from "react-icons/fa";
import { FaHouse, FaUserTie, FaReact  } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import './nav.css'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const eventSidebar = () => { 
    setSidebar(!sidebar)
      }
  return (
    <>
      <nav> 
         {sidebar ? (<button onClick={eventSidebar} className='btn-sidebar'><FaMixer/></button> ) : 
         (<button onClick={eventSidebar} className='btn-sidebar'><FaBars/></button>)}
              <ul className={sidebar ? "active" : ""} id='navBar'>
                  <li><a href="home"><span className='icon-nav'><FaHouse/></span>Home</a></li>
                  <li><a href="#sobre"><span className='icon-nav'><FaUserTie/></span>Sobre</a></li>
                  <li><a href="#tecnologias"><span className='icon-nav'><FaReact /></span>Tecnologias</a></li>
                  <li><a href="Projetos"><span className='icon-nav'><IoMdSettings/></span>Projetos</a></li>
                  <li><a href="Contato"><span className='icon-nav'><FaPhoneAlt /></span>Contato</a></li>
              </ul>
          </nav>
    </>
  )
}

export default Nav