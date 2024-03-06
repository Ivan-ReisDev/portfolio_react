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

  const eventSidebarInterno = () => {
    let width = window.innerWidth
    if(width <= 850) {
      setSidebar(!sidebar)
    }
  }
  return (
    <>
      <nav> 
         {sidebar ? (<button onClick={eventSidebar} className='btn-sidebar'><FaMixer/></button> ) : 
         (<button onClick={eventSidebar} className='btn-sidebar'><FaBars/></button>)}
              <ul className={sidebar ? "active" : ""} id='navBar'>
                  <li onClick={eventSidebarInterno}><a href="#home"><span className='icon-nav'><FaHouse/></span>Home</a></li >
                  <li onClick={eventSidebarInterno}><a href="#sobre"><span className='icon-nav'><FaUserTie/></span>Sobre</a></li>
                  <li onClick={eventSidebarInterno}><a href="#tecnologias"><span className='icon-nav'><FaReact /></span>Tecnologias</a></li>
                  <li onClick={eventSidebarInterno}><a href="#projetos"><span className='icon-nav'><IoMdSettings/></span>Projetos</a></li>
                  <li onClick={eventSidebarInterno}><a href="#contato"><span className='icon-nav'><FaPhoneAlt /></span>teste</a></li>
                  <li onClick={eventSidebarInterno}><a href="#contato"><span className='icon-nav'><FaPhoneAlt /></span>Contato</a></li>
              </ul>
          </nav>
    </>
  )
}

export default Nav