import Contato from '../contato/Contato'
import { Footer } from '../footer/Footer'
import Popup_cookies from '../popup_cookies/Popup_cookies'
import Projetos from '../projetos/Projetos_main'
import Sobre from '../sobre/Sobre'
import Tecnologias from '../tecnologias/Tecnologias'
import './corpo.css'

// eslint-disable-next-line react/prop-types
const Corpo = ({ modoDark }) => {


  return (
    <div className={modoDark ? "corpo" : "dark"}>

      <Sobre />
      <Tecnologias/>
      <Projetos/>
      <Contato/>
      <Popup_cookies/>
      <Footer/>

    </div>
  )
}

export default Corpo