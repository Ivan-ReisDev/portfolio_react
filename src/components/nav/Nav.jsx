import React from 'react'
import { useState } from 'react';
import { FaBars, 
        FaMixer
} from "react-icons/fa";
import './nav.css'

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const eventSidebar = () => {
    console.log(sidebar)    
    setSidebar(!sidebar) 
  }

  return (
    <>
      <nav> 
        {sidebar === 'false' ? (<button onClick={eventSidebar} className='btn-sidebar'><FaBars/></button> ) 
        : ( <button onClick={eventSidebar} className='btn-sidebar'><FaMixer/></button>)}
              <ul>
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