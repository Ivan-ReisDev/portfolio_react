import React from 'react'
import { useState} from 'react';
import { FaBars, FaMixer } from "react-icons/fa";
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
                  <li><a href="Home">Home</a></li>
                  <li><a href="Sobre">Sobre</a></li>
                  <li><a href="Contato">Contato</a></li>
                  <li><a href="Projetos">Projetos</a></li>
              </ul>
          </nav>
    </>
  )
}

export default Nav